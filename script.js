$(document).ready(function() {
    // 显示/隐藏登录表单
    $('#toggle-login').click(function() {
        $('#login-form').toggle();
    });

    // 绑定表单的提交事件
    $('#submit-login').submit(function(e) {
        e.preventDefault(); // 阻止表单默认提交行为
        var username = $('#username').val().trim();
        var password = $('#password').val().trim();
        var email = $('#email').val().trim();
        var isValid = true;

        // 清空之前的校验结果
        $('.error').text('').hide();

        // 用户名校验：非空且长度在6到12位之间
        if (!username || username.length < 6 || username.length > 12) {
            $('#username').after('<span class="error">用户名必须在6到12位之间</span>');
            isValid = false;
        }

        // 密码校验：非空且长度至少为8位
        if (!password || password.length < 8) {
            $('#password').after('<span class="error">密码必须至少为8位</span>');
            isValid = false;
        }

        // 电子邮箱校验：非空且格式正确
        if (!email) {
            $('#email').after('<span class="error">电子邮箱不能为空</span>');
            isValid = false;
        } else if (!isValidEmail(email)) {
            $('#email').after('<span class="error">电子邮箱格式不正确</span>');
            isValid = false;
        }

        // 如果所有校验都通过，可以在这里处理登录逻辑
        if (isValid) {
            console.log('Username:', username, 'Password:', password, 'Email:', email);
            // TODO: 处理登录逻辑
            alert('登录成功！');
            // 清空表单
            $('#login-form')[0].reset();
            // 隐藏表单
            $('#login-form').hide();
        }
    });
});

// 电子邮箱格式校验函数
function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}