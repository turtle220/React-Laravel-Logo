
<!doctype html>

<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>
      
        <script src="{{ asset('js/app.js') }}" defer></script>

        <link href="{{ asset('css/nav.css') }}" rel="stylesheet">

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
        <!-- Styles -->
        <style>
            html, body {
                background-color: #fff;
                color: #636b6f;
                font-family: 'Raleway', sans-serif;
                font-weight: 100;
                height: 100vh;
                margin: 0;
            }

            .full-height {
                height: 100vh;
            }

            .flex-center {
                align-items: center;
                display: flex;
                justify-content: center;
            }

            .position-ref {
                position: relative;
            }

            .top-right {
                position: absolute;
                right: 10px;
                top: 18px;
            }

            .content {
                text-align: center;
            }

            .title {
                font-size: 84px;
            }

            .links > a {
                color: #636b6f;
                padding: 0 25px;
                font-size: 12px;
                font-weight: 600;
                letter-spacing: .1rem;
                text-decoration: none;
                text-transform: uppercase;
            }

            .m-b-md {
                margin-bottom: 30px;
            }
        </style>
    </head>

    <body data-rsssl="1" class="home page-template-default page page-id-31864 theme-stratusx groovy_menu_1-9-8 _masterslider _msp_version_3.2.14 woocommerce-js yith-ctpw wpb-js-composer js-comp-ver-6.0.3 vc_responsive elementor-default elementor-page elementor-page-31864 th-sticky-header loaded headhesive" data-elementor-device-mode="tablet">
        <header class="banner navbar navbar-default navbar-static-top dark-header headhesive--clone headhesive--stick" role="banner" data-transparent-header="true">
            <div class="container">
                <div class="navbar-header">
                </div>
                <nav class="collapse navbar-collapse bs-navbar-collapse" role="navigation" style="height: 0px;">
                    <ul id="menu-menu-menu" class="nav navbar-nav"><li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-31677"><a href="/">Home</a></li>
                        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-37927"><a href="#pricing">Features</a></li>
                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-35020"><a href="https://tronbuilder.com/pro/">Pricing</a></li>
                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-35041"><a href="https://tronbuilder.com/support/">Reviews</a></li>
                        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown menu-item-40877"><a class="dropdown-toggle" href="#">FAQ<b class="caret"></b></a>

                        <!-- <ul class="dropdown-menu">
                            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-40878"><a href="https://tronbuilder.com/photoshop/">Online PhotoShop</a></li>
                            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-40879"><a href="https://tronbuilder.com/apps/">App Maker (Beta)</a></li>
                        </ul>
                        </li> -->
                        <li class="th-accent menu-item menu-item-type-custom menu-item-object-custom menu-item-31777" style="display:flex;    border-color: #29cb97;">
                            @if (Route::has('login'))

                                @auth
                                    <a href="{{ url('/home') }}">Home</a>
                                @else
                                    <a href="{{ route('login') }}" style="margin-right:10px;"> Login  </a>
                                    
                                    <a href="{{ route('register') }}">Register</a>
                                @endauth

                            @endif
                        </li>
                    </ul>        
                </nav>
            </div>
        </header>
        <div class="flex-center position-ref full-height">


            <div class="content">
                <div class="title m-b-md">
                    <div id ="react-main">
                        <script src="/js/app.js" ></script>
                    </div>
                </div>
            </div>
        </div>

    </body>
</html>
