import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import SideBar from "./SideBar";
import { useNavigate } from "react-router-dom";
import userContext from "../context";
function Dashboard() {
  const navigate = useNavigate();
  const token = localStorage.getItem("jwt");
  const [user, setUser] = useState({});
  const passenger = localStorage.getItem("passenger");
  const [modal, setModal] = useState(false);

  useEffect(() => {
    fetch(`https://travela-backend-production.up.railway.app/passengers/${parseInt(passenger)}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          console.log(user)
          setUser((user) => data)});
      } else {
        console.log("something went wrongnpm start");
      }
    });
  }, []);

  if (token) {
    return (
      <userContext.Provider value={{user: user, setUser: setUser}}>
        <div className="flex">
          <div className="flex-initial bg-slate-400 h-screen">
            <SideBar />
          </div>

          <div className="flex-initial w-full p-4 justify-around">
            <button
              onClick={() => setModal((modal) => !modal)}
              className="p-3 hover:text-white sm:hidden fixed hover:bg-sky-900 outline text-sky-600 m-1 rounded-md mb-3">
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>

            <div className="flex-initial w-full p-4 justify-around">
              {modal ? (
                <div className="text-red sm:hidden  self-center rounded-md h-auto w-4/5 m-3 mt-8 fixed bg-sky-400">
                  <button
                    onClick={() => setModal((modal) => !modal)}
                    className="p-2 text-2xl float-right text-white">
                    <svg
                      class="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </button>

                  <div className="w-full grid grid-cols-1 p-3">
                    <div className=" text-black hover:text-white flex-inline hover:bg-sky-900 bg-sky-200 rounded-md p-3 m-2 flex justify-center">
                      <Link
                        onClick={() => setModal((modal) => !modal)}
                        className="flex flex-row"
                        to="/dashboard">
                        <span>
                          <svg
                            class="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                          </svg>
                        </span>

                        <span>Dashboard</span>
                      </Link>
                    </div>
                    <div className=" text-black hover:text-white hover:bg-sky-900 bg-sky-200 rounded-md p-3 m-2 flex justify-center">
                      <Link
                        onClick={() => setModal((modal) => !modal)}
                        className="flex flex-row"
                        to="/dashboard/book">
                        <span>
                          <svg
                            class="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
                          </svg>
                        </span>

                        <span>Book a trip</span>
                      </Link>
                    </div>
                    <div className=" text-black hover:text-white hover:bg-sky-900 bg-sky-200 rounded-md p-3 m-2 flex justify-center">
                      <Link
                        onClick={() => setModal((modal) => !modal)}
                        className="flex flex-row"
                        to="/dashboard/bookings">
                        <span>
                          <svg
                            class="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                          </svg>
                        </span>

                        <span>View Bookings</span>
                      </Link>
                    </div>
                    <div className=" text-black hover:text-white hover:bg-sky-900 bg-sky-200 rounded-md p-3 m-2 flex justify-center">
                      <Link
                        onClick={() => setModal((modal) => !modal)}
                        className="flex flex-row"
                        to="/dashboard/profile">
                        <span>
                          <svg
                            class="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                          </svg>
                        </span>

                        <span>User Profile</span>
                      </Link>
                    </div>
                    <div className=" text-black hover:text-white hover:bg-sky-900 bg-sky-200 rounded-md p-3 m-2 flex justify-center">
                      <div
                        onClick={() => {
                          localStorage.clear();
                          navigate("/login");
                        }}
                        className="flex flex-row">
                        <span>
                          <svg
                            class="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                          </svg>
                        </span>

                        <span>Logout</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
              <Outlet />
            </div>
          </div>
        </div>
      </userContext.Provider>
    );
  } else {
    return (
      <div className="flex flex-col text-5xl justify-center items-center sm:h-screen">
        <h3 className="text-center">Unauthorized access</h3>
        <div className="flex flex-row p-3 justify-evenly w-1/2">
          <button
            onClick={() => navigate("/login")}
            className="bg-sky-400 rounded-md text-2xl px-4">
            LOGIN
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="bg-sky-400 rounded-md text-2xl px-4">
            SIGNUP
          </button>
        </div>
      </div>
    );
  }
}
export default Dashboard;
