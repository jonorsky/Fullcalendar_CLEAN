$(function(){

    var currentDate; // Holds the day clicked when adding a new event
    var currentEvent; // Holds the event object when editing an event

    $('#color').colorpicker(); // Colopicker
    
    var base_url='http://localhost/ci_cal/'; // Here i define the base_url

    // Fullcalendar
    $('#calendar').fullCalendar({
        header: {
            left: 'prev, next, today',
            center: 'title',
             right: 'month,agendaWeek,agendaDay,listWeek'
        },
        // Get all events stored in database
        navLinks: true, // can click day/week names to navigate views
        eventLimit: true, // allow "more" link when too many events
        events: base_url+'calendar/getEvents',
        selectable: true,
        selectHelper: true,
        editable: true, // Make the event resizable true  


            select: function(start, end) {
               
            modal({
                // Available buttons when adding
                buttons: {
                    add: {
                        id: 'add-event', // Buttons id
                        css: 'btn-success', // Buttons class
                        label: 'Add' // Buttons label
                    }
                },
                title: 'Add Event' // Modal title
            });

            // Fix 7/3/2018 - Show Modal First to Override Blank Value of Forms
            $('#start').val(moment(start).format('YYYY-MM-DD HH:mm:ss'));
            $('#end').val(moment(end).format('YYYY-MM-DD HH:mm:ss'));

            // Fix Added - DEBUG: 7/4/2018 DatePicker
            /*$('input[name="end"]').daterangepicker({
                minDate: moment(start),
                singleDatePicker: true,
                timePicker: true,
                drops: 'up',
                timePickerIncrement: 30,
                locale: {
                  format: 'YYYY-MM-DD HH:mm:ss'
                }
              });*/

            //$('input[name="end"]').data('daterangepicker').setStartDate('2018-7-25 10:00:00');

            }, 
           
         eventDrop: function(event, delta, revertFunc,start,end) {  
            
            start = event.start.format('YYYY-MM-DD HH:mm:ss');
            if(event.end){
                end = event.end.format('YYYY-MM-DD HH:mm:ss');
            }else{
                end = start;
            }         
                       
               $.post(base_url+'calendar/dragUpdateEvent',{                            
                id:event.id,
                start : start,
                end :end
            }, function(result){
                $('.alert').addClass('alert-success').text('Event updated successfuly');
                hide_notify();


            });



          },
          eventResize: function(event,dayDelta,minuteDelta,revertFunc) { 
                    
                start = event.start.format('YYYY-MM-DD HH:mm:ss');
            if(event.end){
                end = event.end.format('YYYY-MM-DD HH:mm:ss');
            }else{
                end = start;
            }         
                       
               $.post(base_url+'calendar/dragUpdateEvent',{                            
                id:event.id,
                start : start,
                end :end
            }, function(result){
                $('.alert').addClass('alert-success').text('Event updated successfuly');
                hide_notify();

            });
            },
          
        // Event Mouseover
        eventMouseover: function(calEvent, jsEvent, view){

            var tooltip = '<div class="event-tooltip">' + calEvent.description + '</div>';
            $("body").append(tooltip);

            $(this).mouseover(function(e) {
                $(this).css('z-index', 10000);
                $('.event-tooltip').fadeIn('500');
                $('.event-tooltip').fadeTo('10', 1.9);
            }).mousemove(function(e) {
                $('.event-tooltip').css('top', e.pageY + 10);
                $('.event-tooltip').css('left', e.pageX + 20);
            });
        },
        eventMouseout: function(calEvent, jsEvent) {
            $(this).css('z-index', 8);
            $('.event-tooltip').remove();
        },
        // Handle Existing Event Click
        eventClick: function(calEvent, jsEvent, view) {
            // Set currentEvent variable according to the event clicked in the calendar
            currentEvent = calEvent;
            
            // Open modal to edit or delete event
            modal({
                // Available buttons when editing
                buttons: {
                    delete: {
                        id: 'delete-event',
                        css: 'btn-danger',
                        label: 'Delete'
                    },
                    update: {
                        id: 'update-event',
                        css: 'btn-success',
                        label: 'Update'
                    }
                },
                title: 'Edit Event "' + calEvent.title + '"',
                event: calEvent
            });

            // Debug: For DatePicker
            //alert($('input[name="start"]').val());
            /*
            $('input[name="end"]').daterangepicker({
                minDate:$('input[name="start"]').val(),
                singleDatePicker: true,
                timePicker: true,
                drops: 'up',
                timePickerIncrement: 30,
                locale: {
                  format: 'YYYY-MM-DD HH:mm:ss'
                }
              });*/
              
        }

    });


    // [#]Semi
    // Prepares the modal window according to data passed
    function modal(data) {
        // Set modal title

        //Debug Team Vidallo
        //console.log(data);

        $('.modal-title').html(data.title);
        // Clear buttons except Cancel
        $('.modal-footer button:not(".btn-default")').remove();
        // Set input values

        // FIX UPDATE: Latest Full Calendar
        $('#title_id').val(data.event ? data.event.id : ''); 

        // Fix Added: 7/3/2018
        $('#start').val(data.event ? data.event.start._i: ''); 
        $('#end').val(data.event ? data.event.end._i : ''); 
 

        $('#title').val(data.event ? data.event.title : '');        
        $('#description').val(data.event ? data.event.description : '');
        $('#color').val(data.event ? data.event.color : '#3a87ad');
        // Create Butttons
        $.each(data.buttons, function(index, button){
            $('.modal-footer').prepend('<button type="button" id="' + button.id  + '" class="btn ' + button.css + '">' + button.label + '</button>')
        })
        //Show Modal
        $('.modal').modal('show');
    }


    // Handle Click on Add Button
    $('.modal').on('click', '#add-event',  function(e,date){

        // Fix 7/3/2018 - Validator Checker
        // Add id name of the form in validator[]
        if(validator(['title', 'description','start','end'])) {
            $.post(base_url+'calendar/addEvent', {

                title: $('#title').val(),
                description: $('#description').val(),
                color: $('#color').val(),
                start: $('#start').val(),
                end: $('#end').val()

            }, function(result){
                $('.alert').addClass('alert-success').text('Event added successfuly');
                $('.modal').modal('hide');
                $('#calendar').fullCalendar("refetchEvents");
                hide_notify();
            });
        }
    });

    // [#]Fixed
    // Handle click on Update Button
    $('.modal').on('click', '#update-event',  function(e){
        if(validator(['title', 'description'])) {
            $.post(base_url+'calendar/updateEvent', {

                // Fix 
                // id: currentEvent._id,
                id: $('#title_id').val(),

                start:$('#start').val(),
                end:$('#end').val(),

                title: $('#title').val(),
                description: $('#description').val(),
                color: $('#color').val()
            }, function(result){
                $('.alert').addClass('alert-success').text('Event updated successfuly');
                $('.modal').modal('hide');
                $('#calendar').fullCalendar("refetchEvents");
                hide_notify();
                
            });
        }
    });


    // [#]Fixed
    // Handle Click on Delete Button
    $('.modal').on('click', '#delete-event',  function(e){
        $.get(base_url+'calendar/deleteEvent?id=' + $('#title_id').val(), function(result){
            $('.alert').addClass('alert-success').text('Event deleted successfully !');
            $('.modal').modal('hide');
            $('#calendar').fullCalendar("refetchEvents");
            hide_notify();
        });
    });

    function hide_notify()
    {
        setTimeout(function() {
                    $('.alert').removeClass('alert-success').text('');
                }, 2500);
    }


    // Dead Basic Validation For Inputs
    function validator(elements) {
        var errors = 0;

        // Check if Value in Form is empty
        $.each(elements, function(index, element){
            if($.trim($('#' + element).val()) == '') errors++;
        });

        // Fix - 7/3/2018 Added Validator in Date Format
        $start_value = $.trim($('#start').val());
        $end_value   = $.trim($('#end').val());

        // Debug
        //alert($.trim($('#start').val()));
        //alert(moment($start_value, 'YYYY-MM-DD HH:mm:ss',true).isValid());

        // Fix - 7/3/2018 Added Validator in Date Format
        if(!moment($start_value, 'YYYY-MM-DD HH:mm:ss',true).isValid()){
            alert('Error Start Date Format');
            return false;
        }
        if(!moment($end_value, 'YYYY-MM-DD HH:mm:ss',true).isValid()){
            alert('Error End Date Format');
            return false;
        }
        
        if(errors) {
            $('.error').html('Please Provide Complete Details!');
            return false;
        }
        return true;
    }
});