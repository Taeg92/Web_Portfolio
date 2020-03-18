$('#email_input').on('input', checkInput);
$('#password_input').on('input', checkInput);
$('#pwConfirm_input').on('input', checkInput);
$('#submit_btn').on('click', clickHandler);

function checkInput() {
    var id = $('#email_input').val();
    var password = $('#password_input').val();
    var pw_confirm = $('#pwConfirm_input').val();

    if (id === '' || password === '' || pw_confirm === '') {
        $('#submit_btn').css('background-color','LightCoral');
        $('#submit_btn').css('opacity','0.5');
    } else {
        $('#submit_btn').css('background','none');
    }
}

function clickHandler() {
    var id = $('#email_input').val();
    var password = $('#password_input').val();
    var pw_confirm = $('#pwConfirm_input').val();

    if (id === '') {
        window.alert('이름을 입력해주세요.');
        return
    }
    if (password === '' || password.length < 8) {
        window.alert('비밀번호를 8글자 이상 입력해주세요.');
    } else {
        if (password !== pw_confirm) {
            window.alert('비밀번호를 확인 해주세요.')
        } else {
            window.alert('회원가입이 완료되었습니다.')
        }
    }
}