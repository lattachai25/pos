import React, { Component } from "react";
import Modal from "react-awesome-modal";
import { Link } from "react-router-dom";

export default class forgot_password extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  openModal() {
    this.setState({
      visible: true,
    });
  }

  closeModal() {
    this.setState({
      visible: false,
    });
  }

  render() {
    const topSize = {
      marginTop: 20,
    };

    return (
      <div>
        <div style={{ marginTop: 50 }}></div>
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <div className="jumbotron">
              <div class="alert alert-primary" role="alert">
                Forget Password
              </div>
              <form>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </div>
                <center>
                  {/* <button
                    type="submit"
                    className="btn btn-primary"
                    value="Open"
                    onClick={() => this.openModal()}
                  >
                    Submit
                  </button> */}
                  <input
                    className="btn btn-primary"
                    type="button"
                    value="Submit"
                    onClick={() => this.openModal()}
                  />
                  &nbsp;&nbsp;
                  <button type="reset" class="btn btn-danger">
                    Reset
                  </button>
                  <Modal
                    visible={this.state.visible}
                    width="400"
                    height="300"
                    effect="fadeInUp"
                    onClickAway={() => this.closeModal()}
                  >
                    <div>
                      <div
                        class="alert alert-primary"
                        style={topSize}
                        role="alert"
                      >
                        Forget Password
                      </div>

                      <p>กรุณาตรวจสอบ E-mail ของท่าน</p>
                      <a
                        href="javascript:void(0);"
                        onClick={() => this.closeModal()}
                      >
                        <Link to="/" className="collapse-item">
                          <button type="reset" class="btn btn-danger">
                            OK
                          </button>
                        </Link>
                      </a>
                    </div>
                  </Modal>
                </center>
              </form>
            </div>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    );
  }
}
