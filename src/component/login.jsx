import React from "react";
import { icon } from "./constants";
import { useState } from "react";
import Input from "../ui/input";
function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="text-center">
      <main className="form-signin w-25 m-auto">
        <form>
          <img className="mb-4" src={icon} alt="" width="72" height="57" />
          <h1 className="h3 mb-3 fw-normal">Please login</h1>
          <Input label={"Username"} state={name} setState={setName} />
          <br />
      
          <Input
            label={"Password"}
            type="password"
            state={password}
            setState={setPassword}
          />

          <button className="btn btn-primary w-100 py-2 mt-4" type="submit">
            Registr
          </button>
          <p className="mt-5 mb-3 text-body-secondary">
            © cadet by O'lmasov Nizomjon
          </p>
        </form>
      </main>
    </div>
  );
}

export default Login;
