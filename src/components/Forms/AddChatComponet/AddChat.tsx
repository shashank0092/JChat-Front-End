import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import Switch from "@mui/material/Switch";
import React, { useState,Dispatch, SetStateAction } from "react";
import { Formik, Form, Field } from "formik";
import { debounce } from "lodash";
import { CreateAndGetOneOnOneChat, SearchUser } from "../../../api";
import UserDetails from "./UserDetails";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import {Attachment} from "../../../interface/chat"

interface AvailableUser{
  email:string,
  name:string,
  mediaLink:[Attachment],
  _id:string
}

const AddChat:React.FC<{setModalState:Dispatch<SetStateAction<boolean>>}> = ({setModalState}) => {
  const [isGroupChat, setIsGroupChat] = useState(false);
  const [availableUser, setAvailableUser] = useState<[AvailableUser]>();
  const [selectedGroupMember, setSelectedGroupMember] = useState<
    Array<{ email:string,
      name:string,
      mediaLink:[Attachment],
      _id:string}>
  >([]);
  const [selectedUser, setSelectedUser] = useState<string | undefined>();

  const SearchEmailUser = async (email: string) => {
    const user = await SearchUser({ email });
    const userDetails = await user.data?.data?.data;
    console.log(userDetails,"this is hsukla")
    setAvailableUser(userDetails);
  };

  console.log(selectedGroupMember, "this is our group me");

  const debounceSearchUser = debounce(SearchEmailUser, 500);

  const AddOneOnOneChat=async()=>{
    console.log(selectedUser,"this user is selected for one on one chat")
    
    if(selectedUser){
      const res=await CreateAndGetOneOnOneChat({email:selectedUser})

      console.log(res,"this is response")
    }
  }

  return (
    <>
      <div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white font-some-type-mono text-2xl">
              Create Chat
            </p>
          </div>
          <div>
            <IconButton onClick={()=>setModalState(false)}  >
              <CloseIcon sx={{ fontSize: "30px" }} />
            </IconButton>
          </div>
        </div>
        <div className="flex items-center">
          <div>
            <Switch
              value={isGroupChat}
              onChange={() => setIsGroupChat(!isGroupChat)}
            />
          </div>
          <div>
            <p className="text-white text-base">Is it group chat</p>
          </div>
        </div>
        <div>
          {isGroupChat ? (
            <>
              <Formik
                initialValues={{
                  groupName: "",
                  email: "",
                }}
                onSubmit={(values) => {
                  console.log(values.groupName, "this is group name");
                  console.log(
                    selectedGroupMember,
                    "these are selected group memebr"
                  );
                }}
              >
                {({ handleChange }) => (
                  <Form
                    // onChange={(e: React.ChangeEvent<any>) => {
                    //     setSelectedUser(e.target.value)
                    //     debounceSearchUser(e.target.value)
                    // }}
                    className="flex flex-col gap-5"
                  >
                    <div>
                      <Field
                        id="groupName"
                        name="groupName"
                        type="text"
                        className="py-4 rounded-full px-40 font-some-type-mono text-center outline-none"
                        placeholder="Enter Group Name"
                      />
                    </div>
                    <div>
                      <Field
                        id="email"
                        name="email"
                        type="email"
                        value={selectedUser ? selectedUser : ""}
                        className="py-4 rounded-full px-40 font-some-type-mono text-center outline-none"
                        placeholder="Enter Email"
                        onChange={(e: React.ChangeEvent<any>) => {
                          handleChange(e);
                          if (e.target.name === "email") {
                            setSelectedUser(e.target.value);
                            debounceSearchUser(e.target.value);
                          }
                        }}
                      />
                      {availableUser ? (
                        <UserDetails
                          details={availableUser}
                          setSelectedUser={setSelectedUser}
                          selectedGroupMember={selectedGroupMember}
                          setSelectedGroupMember={setSelectedGroupMember}
                          isGroupChat={isGroupChat}
                        />
                      ) : (
                        <></>
                      )}
                    </div>
                    {selectedGroupMember ? (
                      <div className="flex flex-col gap-5">
                        <div className="flex items-center gap-2 ">
                          <div>
                            <GroupAddIcon
                              sx={{ fontSize: "25px", color: "white" }}
                            />
                          </div>
                          <div>
                            <p className="font-some-type-mono text-white ">
                              Added Member
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          {selectedGroupMember?.map((member) => {
                            return (
                              <>
                                <div className="flex w-fit py-2 px-2 items-center  gap-2 bg-black rounded-full ">
                                  <div>
                                    <img
                                      src={member.mediaLink[0].url}
                                      width={20}
                                    />
                                  </div>
                                  <div>
                                    {member?.name.length > 6 ? (
                                      <p className="text-white">
                                        {" "}
                                        {member.name.slice(0, 8)}...{" "}
                                      </p>
                                    ) : (
                                      <p>{member?.name}</p>
                                    )}
                                  </div>
                                  <div>
                                    <IconButton
                                      sx={{ color: "white" }}
                                      onClick={() =>
                                        setSelectedGroupMember(
                                          (preSelectedGroupMember) => {
                                            const updatedSelectedMember =
                                              preSelectedGroupMember.filter(
                                                (item) =>
                                                  item._id !== member._id
                                              );
                                            return updatedSelectedMember;
                                          }
                                        )
                                      }
                                    >
                                      <CloseIcon sx={{ fontSize: "15px" }} />
                                    </IconButton>
                                  </div>
                                </div>
                              </>
                            );
                          })}
                        </div>
                      </div>
                    ) : (
                      <></>
                    )}
                    <div className=" flex justify-around">
                      <div>
                        {" "}
                        <button
                          type="button"
                          
                          className="font-some-type-mono 
                           bg-green-800 
                           text-white px-10 
                           py-3 
                           rounded-lg 
                           flex 
                           items-center 
                           gap-3"
                        >
                          Add Member
                        </button>
                      </div>
                      <div>
                        {" "}
                        <button
                          type="submit"
                          className="font-some-type-mono  bg-black text-white px-10 py-3 rounded-lg flex items-center gap-3"
                        >
                          Create Group
                        </button>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </>
          ) : (
            <>
              <Formik
                initialValues={{
                  email: "",
                }}
                onSubmit={(values) => {
                  console.log(values, "this is enter values");
                }}
              >
                {({}) => (
                  <Form
                    onChange={(e: React.ChangeEvent<any>) => {
                      setSelectedUser(e.target.value);
                      debounceSearchUser(e.target.value);
                    }}
                    className="flex flex-col gap-5"
                  >
                    <div>
                      <Field
                        id="email"
                        name="email"
                        type="email"
                        value={selectedUser ? selectedUser : ""}
                        className="py-4 rounded-full px-40 font-some-type-mono text-center outline-none "
                        placeholder="Enter Email"
                      />
                      {availableUser ? (
                        <>
                          <UserDetails
                            details={availableUser}
                            setSelectedUser={setSelectedUser}
                            selectedGroupMember={selectedGroupMember}
                            setSelectedGroupMember={setSelectedGroupMember}
                            isGroupChat={isGroupChat}
                          />
                        </>
                      ) : (
                        <></>
                      )}
                    </div>

                    <div className=" flex justify-center ">
                      <button
                        type="submit"
                        onClick={AddOneOnOneChat}
                        className="font-some-type-mono  bg-black text-white px-32 py-3 rounded-lg flex items-center gap-3"
                      >
                        Add To Chat
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </>
          )}
        </div>
        <div></div>
      </div>
    </>
  );
};

export default AddChat;
