import React, { Component } from "react";
import Modal from "react-awesome-modal";
import { Link } from "react-router-dom";
import { FcApproval } from "react-icons/fc";

export default class Register extends Component {
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
    const mysize = {
      fontFamily: "Arial",
      fontSize: 30,
    };

    return (
      <div>
        <div style={{ marginTop: 50 }}></div>

        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <div className="jumbotron">
              <div class="alert alert-primary" style={mysize} role="alert">
                Register From
              </div>
              <form>
                <div class="form-group">
                  <label for="exampleFormControlSelect1">Protion </label>
                  <select class="form-control" id="exampleFormControlSelect1">
                    <option>Employees</option>
                    <option>Manager</option>
                    <option>Whole Sale</option>
                    <option>Sourcing</option>
                    <option>Admin</option>
                    <option>Executive</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Name </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    aria-describedby="name"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group">
                  <label>SurName </label>
                  <input
                    type="text"
                    className="form-control"
                    id="surname"
                    aria-describedby="surname"
                    placeholder="surname"
                  />
                </div>
                <div className="form-group">
                  <label>E-Mail </label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    aria-describedby="email"
                    placeholder="email"
                  />
                </div>
                <div className="form-group">
                  <label>UserName </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    aria-describedby="username"
                    placeholder="UserName"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                  />
                </div>
                <div className="row">
                  <div className="col-3"></div>
                  <div className="col-6">
                    <center>
                      <button
                        type="button"
                        class="btn btn-primary"
                        value="Submit"
                        onClick={() => this.openModal()}
                      >
                        Submit
                      </button>
                      &nbsp;&nbsp;
                      <button type="reset" class="btn btn-danger">
                        Reset
                      </button>
                      &nbsp;&nbsp;
                      <Modal
                        visible={this.state.visible}
                        width="600"
                        height="400"
                        effect="fadeInUp"
                        onClickAway={() => this.closeModal()}
                      >
                        <div>
                          <FcApproval size={200} />
                          <br />
                          <h2> สร้าง User เรียบร้อยแล้ว </h2>
                          <br />
                          <Link to="/Layout" className="collapse-item">
                            <a
                              href="javascript:void(0);"
                              onClick={() => this.closeModal()}
                            >
                              <br />

                              <button type="reset" class="btn btn-success">
                                OK
                              </button>
                            </a>
                          </Link>
                        </div>
                      </Modal>
                    </center>
                  </div>
                  <div className="col-3"></div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-3"></div>
        </div>
        {/* End Row */}
      </div>
    );
  }
}
