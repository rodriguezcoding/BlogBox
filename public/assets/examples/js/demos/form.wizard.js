$(function(){!function(){function e(){return!!$("#bootstrap-wizard-form").valid()||(o.focusInvalid(),!1)}var o=$("#bootstrap-wizard-form").validate({rules:{email:{required:!0,email:!0},name:{required:!0,minlength:3},country:"required",city:"required",payment_method:"required",spending:{required:!0,number:!0},services:"required",message:{required:!0,minlength:6,maxlength:140}},errorElement:"div",errorPlacement:function(e,o){e.addClass("form-control-feedback"),o.closest(".form-group").addClass("has-danger"),"checkbox"===o.prop("type")?e.insertAfter(o.parent(".checkbox")):e.insertAfter(o)},highlight:function(e,o,r){$(e).closest(".form-group").addClass("has-danger").removeClass("has-success"),$(e).removeClass("form-control-success").addClass("form-control-danger")},unhighlight:function(e,o,r){$(e).closest(".form-group").addClass("has-success").removeClass("has-danger"),$(e).removeClass("form-control-danger").addClass("form-control-success")}});$("#bootstrap-wizard-1").bootstrapWizard({tabClass:"nav-tabs",nextSelector:".pager>.btn.next",previousSelector:".pager>.btn.previous",onTabShow:function(e,o,r){$(e).addClass("visited");var n=$("#finish-btn"),s=$("#next-btn"),t=o.find("li").length;r+1==t?(n.show(),s.hide()):(n.hide(),s.show())},onTabClick:function(){return e()},onPrevious:function(e,o,r){$(e).removeClass("visited")},onNext:function(o,r,n){return e()}}),$("#finish-btn").on("click",function(o){e()?swal("Good job!","Thanks for your time taking this surve","success"):swal("Faild","Please fill in all fields","error")})}(),function(){$("#wizard-small-vertex-demo").bootstrapWizard({tabClass:"nav-tabs",nextSelector:".pager>.btn.next",previousSelector:".pager>.btn.previous",onTabShow:function(e,o,r){$(e).addClass("visited")},onTabClick:function(){return!1},onPrevious:function(e,o,r){$(e).removeClass("visited")}})}(),function(){$("#wizard-circle-vertex-demo").bootstrapWizard({tabClass:"nav-tabs",nextSelector:".pager>.btn.next",previousSelector:".pager>.btn.previous",onTabShow:function(e,o,r){$(e).addClass("visited")},onTabClick:function(){return!1},onPrevious:function(e,o,r){$(e).removeClass("visited")}})}(),function(){$("#wizard-keep-prefix-suffix-demo").bootstrapWizard({tabClass:"nav-tabs",nextSelector:".pager>.btn.next",previousSelector:".pager>.btn.previous",onTabShow:function(e,o,r){$(e).addClass("visited")},onTabClick:function(){return!1},onPrevious:function(e,o,r){$(e).removeClass("visited")}})}(),function(){$("#wizard-basic-demo").bootstrapWizard({tabClass:"nav-tabs",nextSelector:".pager>.btn.next",previousSelector:".pager>.btn.previous",onTabShow:function(e,o,r){$(e).addClass("visited")},onPrevious:function(e,o,r){$(e).removeClass("visited")}})}(),function(){$("#modal-wizard").bootstrapWizard({tabClass:"nav-tabs",nextSelector:".pager>.btn.next",previousSelector:".pager>.btn.previous",onTabShow:function(e,o,r){$(e).addClass("visited")},onPrevious:function(e,o,r){$(e).removeClass("visited")}})}()});