<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}" />
        <title>LSP - Mandiri</title>
        <!-- Bootstrap 3.3.6 -->
        <link rel="stylesheet" href="{{ asset('AdminLTE-2.3.11/bootstrap/css/bootstrap.min.css') }}">
        <!-- Font Awesome -->
        <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css"> -->
        <!-- Ionicons -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">
        <!-- Theme style -->
        <link rel="stylesheet" href="{{ asset('AdminLTE-2.3.11/dist/css/AdminLTE.min.css') }}">
        <link rel="stylesheet" href="{{ asset('global.css') }}">
        <!-- AdminLTE Skins. Choose a skin from the css/skins
            folder instead of downloading all of them to reduce the load. -->
        <link rel="stylesheet" href="{{ asset('AdminLTE-2.3.11/dist/css/skins/_all-skins.min.css') }}">

        <link rel="stylesheet" href="{{ asset('AdminLTE-2.3.11/plugins/datatables/dataTables.bootstrap.css') }}">
        <link rel="stylesheet" href="https://cdn.datatables.net/buttons/1.6.1/css/buttons.dataTables.min.css">

        <link rel="stylesheet" href="{{ asset('AdminLTE-2.3.11/plugins/fileinput-v4.5.2-0/css/fileinput.css') }}">

        <link rel="stylesheet" href="{{ asset('AdminLTE-2.3.11/plugins/fileinput-v4.5.2-0/css/fileinput-rtl.css') }}">

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.8.0/css/bootstrap-datepicker.min.css">
        <link rel="stylesheet" type="text/css" href="{{ asset('global.css') }}">
        <!-- FONT AWESOME -->
        <link rel="stylesheet" type="text/css" href="{{ asset('vendor') }}/font-awesome/css/font-awesome.min.css">
        {{-- <link href="{{ asset('css/app.css') }}" rel="stylesheet" /> --}}

      
    </head>
    <body class="hold-transition skin-blue sidebar-mini sidebar-collapse">
        <!-- Site wrapper -->
        <div class="wrapper">
        <div id="app"></div>
        </div>
        <script src="{{ asset('js/app.js') }}" ></script>
        <!-- jQuery 2.2.3 -->
        <script src="{{ asset('AdminLTE-2.3.11/plugins/jQuery/jquery-2.2.3.min.js')}}"></script>
        <!-- Bootstrap 3.3.6 -->
        <script src="{{ asset('AdminLTE-2.3.11/bootstrap/js/bootstrap.min.js')}}"></script>
        <!-- SlimScroll -->
        <script src="{{ asset('AdminLTE-2.3.11/plugins/slimScroll/jquery.slimscroll.min.js') }}"></script>
        <!-- FastClick -->
        <script src="{{ asset('AdminLTE-2.3.11/plugins/iCheck/icheck.min.js') }}"></script>

        <!-- iCheck -->
        <script src="{{ asset('AdminLTE-2.3.11/plugins/fastclick/fastclick.js') }}"></script>

        <!-- AdminLTE App -->
        <script src="{{ asset('AdminLTE-2.3.11/dist/js/app.min.js') }}"></script>
        <!-- Data Table -->
        <script src="{{ asset('AdminLTE-2.3.11/plugins/datatables/jquery.dataTables.min.js') }}"></script>
        <script src="{{ asset('AdminLTE-2.3.11/plugins/datatables/dataTables.bootstrap.min.js') }}"></script>

        {{-- Datatable export button --}}

        <script type="text/javascript" src="https://cdn.datatables.net/plug-ins/1.10.22/sorting/natural.js"></script>
        <script type="text/javascript" src="https://cdn.datatables.net/buttons/1.6.1/js/dataTables.buttons.min.js"></script>
        <script type="text/javascript" src="https://cdn.datatables.net/buttons/1.6.1/js/buttons.flash.min.js"></script>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/pdfmake.min.js"></script>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/vfs_fonts.js"></script>
        <script type="text/javascript" src="https://cdn.datatables.net/buttons/1.6.1/js/buttons.html5.min.js"></script>
        <script type="text/javascript" src="https://cdn.datatables.net/buttons/1.6.1/js/buttons.print.min.js"></script>

        <script src="{{ asset('AdminLTE-2.3.11/plugins/input-mask/jquery.inputmask.js')}}"></script>
        <script src="{{ asset('AdminLTE-2.3.11/plugins/input-mask/jquery.inputmask.date.extensions.js')}}">
        </script>
        <script src="{{ asset('AdminLTE-2.3.11/plugins/input-mask/jquery.inputmask.extensions.js')}}">
        </script>

        <!-- File input bootstrap -->
        <script src="{{ asset('AdminLTE-2.3.11/plugins/fileinput-v4.5.2-0/js/plugins/piexif.min.js') }}"></script>
        <script src="{{ asset('AdminLTE-2.3.11/plugins/fileinput-v4.5.2-0/js/plugins/sortable.min.js') }}"></script>
        <script src="{{ asset('AdminLTE-2.3.11/plugins/fileinput-v4.5.2-0/js/plugins/purify.min.js') }}"></script>
        <script src="{{ asset('AdminLTE-2.3.11/plugins/fileinput-v4.5.2-0/js/fileinput.min.js') }}"></script>

        <script src="{{ asset('AdminLTE-2.3.11/plugins/jquery-validation-1.19.0/dist/jquery.validate.min.js') }}"></script>

        <script type="text/javascript"
            src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/js/bootstrap-datepicker.min.js"></script>

            <!-- <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.8.0/js/bootstrap-datepicker.min.js"></script> -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.27.0/moment-with-locales.min.js"></script>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/4.17.47/js/bootstrap-datetimepicker.min.js"></script>

        <script src="https://js.pusher.com/6.0/pusher.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@8"></script>

    </body>
</html>
