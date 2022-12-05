import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../slice/auth";
import { getFragmentValue } from "../../utils/getFragments";

export default function AuthCallback() {
  const navigate = useNavigate();
  const access_token = getFragmentValue("access_token");
  const dispatch = useDispatch();

  useEffect(() => {
    if (!access_token) navigate("/");
    DZ.api(`/user/me?access_token=${access_token}`, function (response) {
      dispatch(login(response));
      navigate("/");
    });
  }, []);

  return <div>authentification en cours...</div>;
}
