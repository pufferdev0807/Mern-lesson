import React, { useEffect, useState } from "react";
import {
  Card,
  Col,
  Container,
  Row,
  Form,
  Button,
  Spinner,
  Image
} from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { Link } from "react-router-dom";
import { SERVER_URL } from "../../config";

export default function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userConfirmPassword, setUserConfirmPassword] = useState("");

  const [isLoding, setIsLoding] = useState(false);

  const Register = () => {
    setIsLoding(true);

    if ( firstName == "" || lastName == "" || userEmail == "" || userPassword == "" ) {
      setIsLoding(false);
      toast.error("Please input all informations.");
      return;
    }

    const data = {
      firstName: firstName,
      lastName: lastName,
      userEmail: userEmail,
      userPassword: userPassword,
    };

    axios
      .post(SERVER_URL + "/auth/register", data)
      .then((res) => {
        if (res.data.status == true) {
          setTimeout(() => {
            setIsLoding(false);
            toast.success(res.data.message);
          }, 2000);
        } else {
          setIsLoding(false);
          toast.error(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="RegisterPage overflow-hidden">
      <Row>
        <Col
          lg={6}
          md={6}
          sm={6}
          style={{
            backgroundImage: `url("/assets/images/bg.svg")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="main-form-content d-flex align-items-center justify-content-center"
        >
          <Container className="col-md-8 col-lg-8 col-sm-10">
            <Form>
            <div className="fs-1 fw-bold text-center text-white">
              Create an account
            </div>
            <div className="fs-5-2 text-center text-white mt-2">
              Already an account?{" "}
              <Link to="/login" className="nav-link d-inline-block fw-bold">
                Log in
              </Link>
            </div>
              <Row>
                <Form.Group as={Col} md="6" controlId="validationCustom01">
                  <Form.Control
                    required
                    type="text"
                    placeholder="First name"
                    className="py-3 mt-3"
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom01">
                  <Form.Control
                    required
                    type="text"
                    placeholder="Last name"
                    className="py-3 mt-3"
                    value={lastName}
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  />
                </Form.Group>
              </Row>
              <Row className="mt-3">
                <Form.Group as={Col} md="12" controlId="validationCustom01">
                  <Form.Control
                    required
                    type="email"
                    placeholder="Email"
                    value={userEmail}
                    className="py-3"
                    onChange={(e) => {
                      setUserEmail(e.target.value);
                    }}
                  />
                </Form.Group>
              </Row>
              <Row className="mt-3">
                <Form.Group controlId="validationCustom01">
                  <Form.Control
                    required
                    type="password"
                    placeholder="Password"
                    className="py-3"
                    value={userPassword}
                    onChange={(e) => setUserPassword(e.target.value)}
                  />
                </Form.Group>
              </Row>
              <Row className="mt-3 d-flex mb-5 justify-content-center align-items-center">
                <Col lg={12} md={12} sm={12}>
                  {isLoding == true ? (
                    <Button className="w-100 p-3 bg-primary-2 border border-0" disabled>
                      <Spinner animation="grow" />
                    </Button>
                  ) : (
                    <Button className="w-100 bg-white p-3 d-flex align-items-center justify-content-center text-primary-1 border border-0 fw-bold border-none" onClick={Register}>
                      <div>Create Your Account</div>
                      <Image className="ms-3" src="/assets/images/mail.svg"/>
                    </Button>
                  )}
                </Col>
              </Row>
              <div className="fs-6 text-center text-white mb-3">or sign up with</div>
              <Row className="justify-content-center">
                <Button className="bg-white border border-0 mx-3 col-2 d-flex align-items-center justify-content-center p-2">
                  <Image src="/assets/images/go.svg" width="50"/>
                </Button>
                <Button className="bg-white border border-0 mx-3 col-2 d-flex align-items-center justify-content-center p-2">
                  <Image src="/assets/images/fc.svg" width="50"/>
                </Button>
              </Row>
            </Form>
          </Container>
        </Col>
        <Col
          lg={6}
          md={6}
          className="d-md-flex align-items-center justify-content-center media-section-right"
          style={{
            backgroundImage: `url("/assets/images/bg1.jpg")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <Image src="/assets/images/logo.svg"/>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
}
