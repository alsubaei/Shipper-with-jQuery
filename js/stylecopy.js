    if (document.readyState === "loading") {
        //________________________________________________________________________________

        var map, infoWindow, pos, marker, GeoCodeStr, GeoCodeArr, input;
        var InitPos = { lat: 15.3510508, lng: 44.1795148 };

        $('#input-geocode1').on('input', function(e) {
            changePos(GeoCodeStr = $('#input-geocode1').val());
        });
        $('#input-geocode2').on('input', function(e) {
            changePos(GeoCodeStr = $('#input-geocode2').val());
        });
        $('#input-geocode3').on('input', function(e) {
            changePos(GeoCodeStr = $('#input-geocode3').val());
        });
        $('#input-geocode4').on('input', function(e) {
            changePos(GeoCodeStr = $('#input-geocode4').val());
        });
        $('#input-geocode5').on('input', function(e) {
            changePos(GeoCodeStr = $('#input-geocode5').val());
        });
        $('#input-geocode6').on('input', function(e) {
            changePos(GeoCodeStr = $('#input-geocode6').val());
        });

        function initMap() {
            $('#input-geocode1').click(function() {
                GeoCodeStr = $('#input-geocode1').val();
                input = $('#input-geocode1');
            });
            $('#input-geocode2').click(function() {
                GeoCodeStr = $('#input-geocode2').val();
                input = $('#input-geocode2');
            });
            $('#input-geocode3').click(function() {
                GeoCodeStr = $('#input-geocode3').val();
                input = $('#input-geocode3');
            });
            $('#input-geocode4').click(function() {
                GeoCodeStr = $('#input-geocode4').val();
                input = $('#input-geocode4');
            });
            $('#input-geocode5').click(function() {
                GeoCodeStr = $('#input-geocode5').val();
                input = $('#input-geocode5');
            });
            $('#input-geocode6').click(function() {
                GeoCodeStr = $('#input-geocode6').val();
                input = $('#input-geocode6');
            });
            if (checkLatLng(GeoCodeStr)) {
                GeoCodeArr = GeoCodeStr.split(",")
            } else {
                GeoCodeArr = [InitPos.lat, InitPos.lng];
            }
            map = new google.maps.Map(
                document.getElementById('map'), {
                    center: new google.maps.LatLng(GeoCodeArr[0], GeoCodeArr[1]),
                    zoom: 15
                });
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(GeoCodeArr[0], GeoCodeArr[1]),
                map: map,
                draggable: true,
                title: "Drag me!"
            });

            infoWindow = new google.maps.InfoWindow;

            google.maps.event.addListener(marker, 'drag', function(event) {
                infoWindow.setContent('Location.<br/> (' + event.latLng.lat() + ',' + event.latLng.lng() + ')');
                getReverseGeocodingData(event.latLng.lat(), event.latLng.lng());
            });

            google.maps.event.addListener(map, 'click', function(event) {
                marker.setPosition(event.latLng);
                infoWindow.setContent('Location.<br/> (' + event.latLng.lat() + ',' + event.latLng.lng() + ')');
                getReverseGeocodingData(event.latLng.lat(), event.latLng.lng());
            });

            google.maps.event.addListener(marker, 'click', function(event) {
                infoWindow.setContent('Location.<br/> (' + event.latLng.lat() + ',' + event.latLng.lng() + ')');
                infoWindow.open(map, marker);
            });
        }

        function checkLatLng(mapPos) {
            var regex = /^\s*([-+]?)([\d]{1,2})((\.)(\d+))\s*,\s*([-+]?)([\d]{1,3})((\.)(\d+))\s*$/;

            if (regex.exec(mapPos) !== null) {
                return true;
            } else {
                return false;
            }
        }

        function changePos(MapPos) {
            if (checkLatLng(MapPos)) {
                GeoCodeStr = MapPos;
                GeoCodeArr = GeoCodeStr.split(",")
            } else {
                GeoCodeArr = [InitPos.lat, InitPos.lng];
            }

            var latlng = new google.maps.LatLng(GeoCodeArr[0], GeoCodeArr[1]);
            marker.setPosition(latlng);
            infoWindow.setContent('Location.<br/> ' + latlng);
            map.setCenter(latlng);
        }

        function getReverseGeocodingData(lat, lng) {
            var latlng = new google.maps.LatLng(lat, lng);
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({ 'latLng': latlng }, function(results, status) {
                if (status !== google.maps.GeocoderStatus.OK) {
                    alert(status);
                }
                if (status == google.maps.GeocoderStatus.OK) {
                    input.val(results[0].formatted_address);
                }
            });
        }
    }
    //________________________________________________________________________________

    $(document).ready(function() {
        //________________________________________________________________________________

        //The style of active links in header

        $('.nav-active').click(function() {
            $('.nav-active').removeClass('nav-active-style');
            $(this).addClass('nav-active-style');
        });
        //________________________________________________________________________________

        // first actions

        $("#forgot_password").css("visibility", "hidden");
        $("#enter_password").css("visibility", "hidden");
        $("#signup_form").hide();
        $("#FurnitureShipping_form").hide();
        $("#CarShipping_form").hide();
        $("#GoodsShipping_form").hide();
        $("#login_form").show();
        $('.clockpicker').clockpicker();
        $('.addon_datepicker').datepicker({
            format: "dd/mm/yyyy",
            todayBtn: "linked",
            autoclose: true,
            todayHighlight: true
        });
        //________________________________________________________________________________

        //display Signup

        $(".signup_btn").click(function() {
            $("#login_form").hide();
            $("#FurnitureShipping_form").hide();
            $("#CarShipping_form").hide();
            $("#GoodsShipping_form").hide();
            $("#signup_form").show();
        });
        //________________________________________________________________________________

        //display Login

        $(".login_btn").click(function() {
            $("#signup_form").hide();
            $("#FurnitureShipping_form").hide();
            $("#CarShipping_form").hide();
            $("#GoodsShipping_form").hide();
            $("#login_form").show();
        });
        //________________________________________________________________________________

        //Validation of login form

        $("#submit_login").click(function() {
            var flag = 0;
            $("#login_form").find("input").each(function() {
                if (!$(this).val()) {
                    $(this).css("background-color", "pink")
                    flag++;
                    $(this).change(function() {
                        $(this).css("background-color", "white");
                    });
                    $("#pwd").focus(function() { $("#forgot_password").css("visibility", "visible"); });
                    if (!$("#pwd").val() && $("#email").val())
                        $("#enter_password").css("visibility", "visible");
                }
            });
            if (flag == 0) {
                $("#login_form").hide();
                $(".focus").find('input').prop("checked", true);
                $("#FurnitureShipping_form").show();
            }
        });
        //________________________________________________________________________________

        //Validation of sign up form

        $("#submit_signup").click(function() {
            var flag = 0;
            $("#signup_form").find("input").each(function() {
                if (!$(this).val()) {
                    $(this).css("background-color", "pink")
                    flag++;
                    $(this).change(function() {
                        $(this).css("background-color", "white");
                    });
                }
            });
            if (flag == 0) {
                $("#signup_form").hide();
                $(".focus").find('input').prop("checked", true);
                $("#FurnitureShipping_form").show();
            }
        });

        //________________________________________________________________________________

        //display Furniture form

        $('.Furniture').click(function() {
            $(".focus").find('input').prop("checked", true);
            $("#FurnitureShipping_form").show();
            $("#CarShipping_form").hide();
            $("#GoodsShipping_form").hide();
        });
        //________________________________________________________________________________

        //display Car form

        $('.Car').click(function() {
            $(".focus").find('input').prop("checked", true);
            $("#CarShipping_form").show();
            $("#FurnitureShipping_form").hide();
            $("#GoodsShipping_form").hide();

        });
        //________________________________________________________________________________

        //display Goods form

        $('.Goods').click(function() {
            $(".focus").find('input').prop("checked", true);
            $("#GoodsShipping_form").show();
            $("#FurnitureShipping_form").hide();
            $("#CarShipping_form").hide();
        });
        //________________________________________________________________________________

        //focus radio button

        $('input[name=radio1]').click(function() {
            $('input[name=radio1]').each(function() {
                if ($(this).prop("checked"))
                    $(this).closest('div').removeClass(["focus_color", "blur_color"]).addClass("focus_color");
                else
                    $(this).closest('div').removeClass(["focus_color", "blur_color"]).addClass("blur_color");
            });
        });

        //________________________________________________________________________________

        //functions of plus and minus button

        function incrementValue(e) {
            e.preventDefault();
            var fieldName = $(e.target).data('field');
            var parent = $(e.target).closest('div');
            var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);

            if (!isNaN(currentVal)) {
                parent.find('input[name=' + fieldName + ']').val(currentVal + 1);
            } else {
                parent.find('input[name=' + fieldName + ']').val(0);
            }
        }

        function decrementValue(e) {
            e.preventDefault();
            var fieldName = $(e.target).data('field');
            var parent = $(e.target).closest('div');
            var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);

            if (!isNaN(currentVal) && currentVal > 0) {
                parent.find('input[name=' + fieldName + ']').val(currentVal - 1);
            } else {
                parent.find('input[name=' + fieldName + ']').val(0);
            }
        }

        $('.input-group').on('click', '.button-plus', function(e) {
            incrementValue(e);
        });

        $('.input-group').on('click', '.button-minus', function(e) {
            decrementValue(e);
        });

        //________________________________________________________________________________

        //function of clock

        $('.clockpicker').click(function() {
            $('.clockpicker-span-minutes').after(' ');
        });

    });