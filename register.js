
const register = () =>{
    console.log("This is a register page")
    return `<section>
    <div class="login-box">
    <form action="">
        <h2>Register</h2>
        <div class="input-box">
            <span class="icon"><ion-icon name="person-circle"></ion-icon></span>
            <input type="text" required>
            <label>Name</label>
        </div>
        <div class="input-box">
            <span class="icon"><ion-icon name="mail"></ion-icon></span>
            <input type="email" required>
            <label>Email</label>
        </div>
        <div class="input-box">
            <span class="icon"><ion-icon name="call"></ion-icon></span>
            <input type="tel" required>
            <label>Phone Number</label>
        </div>
        <div class="input-box">
            <span class="icon"><ion-icon name="lock-closed"></ion-icon></span>
            <input type="password" required>
            <label>Password</label>
        </div>
         <div class="input-box">
            <span class="icon"><ion-icon name="repeat"></ion-icon></span>
            <input type="password" required>
            <label>Re-Password</label>
        </div>
        <div class="remember-forgot">
            <label><input type="checkbox">Send me OTP</label>
        </div>
        <button type="submit">Register</button>
        <div class="register-link">
            <p>Already have a account <a href="#">Login</a></p>
        </div>
    </form>
   </div>
   </section>`
}

export default register;