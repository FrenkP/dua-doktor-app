import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";

const Verify = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const success = searchParams.get("success");
  const appointmentId = searchParams.get("appointmentId");

  const { backendUrl, token } = useContext(AppContext);

  const navigate = useNavigate();
};

export default Verify;
