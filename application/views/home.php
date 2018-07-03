<!DOCTYPE html>
<html>
    <head>
    <title>Full Calendar CRUD</title>
        <meta charset='utf-8' />

        <!-- CSS --> 
        <link href="<?php echo base_url();?>assets/fullcalendar/css/bootstrap.min.css" rel="stylesheet">

        <link href='<?php echo base_url();?>assets/fullcalendar/css/fullcalendar.css' rel='stylesheet' />

        <link href="<?php echo base_url();?>assets/fullcalendar/css/bootstrapValidator.min.css" rel="stylesheet" /> 

        <link href="<?php echo base_url();?>assets/fullcalendar/css/bootstrap-colorpicker.min.css" rel="stylesheet" />

        <!-- Custom css  -->
        <link href="<?php echo base_url();?>assets/fullcalendar/css/custom.css" rel="stylesheet" />

        <!-- For Datepicker.css -->
        <!--
        <link href="<?php echo base_url();?>assets/fullcalendar/css/bootstrap-datetimepicker.css" rel="stylesheet" />-->
        
    </head>
    <body>

        <div class="container">
                <!-- Notification -->
                <div class="alert"></div>
            <div class="row clearfix">
                <div class="col-md-12 column">
                        <div id='calendar'></div>
                </div>
            </div>
        </div>
        <div class="modal fade">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                        <h4 class="modal-title"></h4>
                    </div>
                    <div class="modal-body">
                        <div class="error"></div>
                        <form class="form-horizontal" id="crud-form">
                        
                        <!--<input type="hidden" id="start">
                        <input type="hidden" id="end">-->

                            <!-- FIX UPDATE: Latest FullCalendar-->
                            <div class="form-group">
                                <label class="col-md-4 control-label" for="title_id">ID - <small>( For Debugging Purposes ) Team Vidallo</small></label>
                                <div class="col-md-4">
                                    <input id="title_id" name="title_id" type="text" class="form-control input-md" disabled />
                                </div>
                            </div>   


                            <div class="form-group">
                                <label class="col-md-4 control-label" for="title">Title</label>
                                <div class="col-md-4">
                                    <input id="title" name="title" type="text" class="form-control input-md" />
                                </div>
                            </div>   

                            <div class="form-group">
                                <label class="col-md-4 control-label" for="description">Description</label>
                                <div class="col-md-4">
                                    <textarea class="form-control" id="description" name="description"></textarea>
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-md-4 control-label" for="color">Color</label>
                                <div class="col-md-4">
                                    <input id="color" name="color" type="text" class="form-control input-md" readonly="readonly" />
                                    <span class="help-block">Click to pick a color</span>
                                </div>
                            </div>


                            <div class="form-group">
                                <label class="col-md-4 control-label" for="start">Start</label>
                                <div class="col-md-4">
                                    <input id="start" name="start" type="text" class="form-control input-md" readonly="readonly" />
                                </div>
                            </div>
                            
                            <!--
                            <div class="form-group">
                                <label class="col-md-4 control-label" for="end">End Date</label>
                                <div class="col-md-4">
                                    <input id="end" name="end" type="text" class="form-control input-md" />
                                </div>
                            </div>-->
                            <div class="form-group">
                                <label class="col-md-4 control-label" for="end">End</label>
                                <div class="col-md-4">
                                    <div class='input-group date' id='datetimepicker1'>
                                    <input id="end" name="end" type="text" class="form-control input-md" />
                                    <span class="input-group-addon">
                                        <span class="glyphicon glyphicon-calendar"></span>
                                    </span>
                                    </div>
                                </div>
                            </div>

                            <!--
                            <div class='input-group date' id='datetimepicker1'>
                            <input type='text' class="form-control" />
                            <span class="input-group-addon">
                                <span class="glyphicon glyphicon-calendar"></span>
                            </span>
                             </div>-->


                          

                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>


 <!-- JavaScript placed at the end of the document so the pages load faster -->

        <!-- JS -->
        <script src="<?php echo base_url();?>assets/fullcalendar/js/moment.min.js"></script>

        <script src="<?php echo base_url();?>assets/fullcalendar/js/jquery.min.js"></script>

        <script src="<?php echo base_url();?>assets/fullcalendar/js/bootstrap.min.js"></script>

        <script src="<?php echo base_url();?>assets/fullcalendar/js/bootstrapValidator.min.js"></script>

        <script src="<?php echo base_url();?>assets/fullcalendar/js/fullcalendar.min.js"></script>
        
        <script src='<?php echo base_url();?>assets/fullcalendar/js/bootstrap-colorpicker.min.js'></script>
        
        <script src='<?php echo base_url();?>assets/fullcalendar/js/main.js'></script>


        <!-- For Datepicker.js 
        <script src='<?php echo base_url();?>assets/fullcalendar/js/bootstrap-datetimepicker.min.js'></script>   


        <script type="text/javascript">
            $(function () {
                $('#datetimepicker1').datetimepicker({
                    format:'YYYY-MM-DD HH:mm:ss',


                });
            });
        </script>

        -->


        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js"></script>
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css" />

<!--
        <script>
        $(function() {
          $('input[name="end"]').daterangepicker({
            singleDatePicker: true,
            timePicker: true,
            drops: 'up',
            timePickerIncrement: 30,
            locale: {
              format: 'YYYY-MM-DD HH:mm:ss'
            }
          });

          $('input[name="end"]').data('daterangepicker').setStartDate($('#start').val);

        });
        </script>
-->
