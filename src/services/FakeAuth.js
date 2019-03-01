class FakeAuthClass {

    auth(){
        if(localStorage.getItem("token")){
            return true;
        }
        else{
            return false;
        }
    }

}

const FakeAuth = new FakeAuthClass();
export default FakeAuth;