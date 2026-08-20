import { useState } from "react"

function Login(){

    const [pwd1, setPassword1] = useState();
    const [pwd2, setPassword2] = useState();

    const [same, setSame] = useState(true);

    function Handlepwd1(event){
        setPassword1(event.target.value);
        
    }

    function Handlepwd2(event){
        setPassword2(event.target.value);
        if(pwd1 == event.target.value){
            setSame(true);
        }
        else{
            setSame(false);
        }
        
    }



    
    return (
        <>
        <form style={{width:"50%", margin: "auto", marginTop: "100px"}}>
            {!same && <p>Password dont match</p>}
            <div className="mb-3" >
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input value={pwd1} onChange={Handlepwd1} type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Re-Password</label>
                <input value={pwd2} onChange={Handlepwd2} type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" for="exampleCheck1">I Agree</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
          
}

export default Login