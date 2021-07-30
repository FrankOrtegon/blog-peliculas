import React, {useState} from "react";
import {connect} from "react-redux";
import {getCount, getUser} from "../../../application/selectors/user";
import {bindActionCreators} from "redux";
import {updateCount} from "../../../application/actions/user";

import alertify from "alertifyjs";
import { withRouter } from "react-router-dom";

export const Profile = ({user, count, updateCount, history}) => {

    const [userEmail, setUserEmail] = useState(user.userEmail);
    const [name, setName] = useState(count.name.value);
    const [phone, setPhone] = useState(count.phone.value);
    const [plan, setPlan] = useState(count.plan.plan);

    const updateCountUser = (event) => {
        event.preventDefault();
        const countSubmit = {
            idCount: count.idCount,
            name: name,
            phone: phone,
            plan: plan
        }
        updateCount(countSubmit)
        alertify.success("Update count success")
        history.push('/');
    }

    return (
        <div className="container text-center">
            <div className="row">
                <div className="col-md-3"/>
                <div className="col-md-6">
                    <div className="card my-5">
                        <div className="card-body">
                            <img className="rounded-circle"
                                 src={user.photoURL}
                                 alt="" width={"120"} height={"120"}/>
                            <hr className="my-4"/>
                            <label>Email</label>
                            <input className={"form-control"}
                                   value={userEmail}
                                   disabled={true}
                                   onChange={event => setUserEmail(event.target.value)}/>
                            <hr className="my-4"/>
                            <label>Name</label>
                            <input data-testid={"input-test-name"}
                                   className={"form-control"}
                                   value={name}
                                   onChange={event => setName(event.target.value)}/>
                            <hr className="my-4"/>
                            <label>Phone</label>
                            <input className={"form-control"}
                                   value={phone}
                                   onChange={event => setPhone(event.target.value)}/>
                            <hr className="my-4"/>
                            <label>Plan</label>
                            <select className="form-select form-control"
                                    value={plan}
                                    onChange={(event => setPlan(event.target.value))}>
                                <option value={true}>Premium</option>
                                <option value={false}>No premium</option>
                            </select>
                            <hr className="my-4"/>
                            <button data-testid={"btn-test"} onClick={updateCountUser} className="btn btn-primary px-5 mt-4 ">
                                Update Count <i className="bi bi-pencil-square"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: getUser(state),
        count: getCount(state),
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({updateCount}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Profile));