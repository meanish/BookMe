import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

const RemoveCard = ({ AllData, place }) => {
  var whichplace = place;
  const { img, head, subhead, inbutton } = AllData[whichplace];
  const [email, setEmail] = useState();
  const [show, noShow] = useState("");
  return (
    <>
      {
        show === "" ?
          (<div className="border p-3" >
            <div className="row">
              <div className="col-2">
                <div className="logo"><img src={img} alt="" /></div>
              </div>
              <div className="col-10">
                <div className="info">
                  <h1>{head}</h1>
                  <p>{subhead}{whichplace}</p>
                  <div className="form">
                    {
                      whichplace == "0" ?
                        (
                          <input
                            className="form-input"
                            type="email"
                            required
                            value={email}
                            placeholder="Enter your email address"
                            onChange={(event) => setEmail(event.target.value)}
                          />
                        ) : null
                    }
                    <Button variant="outlined" className="sign" >{inbutton}</Button>
                    {
                      whichplace == "1" ?
                        (
                          <Button className="sign ms-2" >Register Now</Button>
                        ) : null
                    }
                  </div>

                  <CloseIcon className="cancel" onClick={() => noShow("HideMe")} />
                </div>
              </div>
            </div>
          </div>
          ) : null
      }

    </>
  )
}

export default RemoveCard