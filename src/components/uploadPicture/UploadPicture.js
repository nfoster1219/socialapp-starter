import React from 'react'
import DataService from "../../dataService"

function UploadPicture() {
    const client=new DataService();
    const handleImageUpload = e => {
        const [file] = e.target.files;
        if (file) {
          client.setUsersPicture(UploadPicture)
        }
      };

    return (
      <div className="UploadPicture">
        <input type="file" accept="image/*" multiple = "false"/>
        <div
          style={{
            height: "60px",
            width: "60px",
            border: "2px dashed black"
          }}
        >
          <img
            style={{
              width: "100%",
              height: "100%",
              position: "absolute"
            }}
          />
        </div>
      </div>
    );
  }


export default UploadPicture
