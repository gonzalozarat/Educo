$(document).ready(function(){
    $("#id_new_password2").keyup(function(){
        if($("#id_new_password1").val()!=$("#id_new_password2").val()){
            $("#id_new_password2").addClass("form-control-danger");
            $(".password2").addClass("has-danger");
            $(".form-control-feedback").removeClass("sr-only");
            $("#btn-send-password").prop("disabled",true);
        }else{
            $("#id_new_password2").removeClass("form-control-danger");
            $(".password2").removeClass("has-danger");
            $(".form-control-feedback").addClass("sr-only");
            $("#btn-send-password").prop("disabled",false);
        }
    });
})