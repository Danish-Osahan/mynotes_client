import React from "react";



const ErrorMessage = ({ variant = "error", children }) => {
  // const [open, setOpen] = React.useState(false);
  return (
    // <Alert
    //   severity={variant}
    //   onClose={close}
    //   style={{display:""+`${style}`}}
    //   id="alert"
    // >
    //   <strong style={{ fontSize: "15px" }}>{children}</strong>
    // </Alert>
    
    <div className="alert alert-warning alert-dismissible fade show " id="alert" role="alert">
      <strong>{children}</strong> 
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>

    
        
      
    
   
    
  );
};

export default ErrorMessage;
