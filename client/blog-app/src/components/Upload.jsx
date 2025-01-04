import { toast } from "react-toastify";
import { useRef } from "react";
import { IKContext, IKUpload } from "imagekitio-react";

const authenticator = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/posts/upload-auth`
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Request failed with status ${response.status}: ${errorText}`
      );
    }

    const data = await response.json();
    const { signature, expire, token } = data;
    return { signature, expire, token };
  } catch (error) {
    throw new Error(`Authentication request failed: ${error.message}`);
  }
};
const Upload = ({ children, type, setProgress, setCover }) => {
  const ref = useRef(null);
  const onError = (err) => {
    // console.log(err);
    toast.error("image upload failed");
  };
  const onSuccess = (res) => {
    console.log(res);
    setCover(res);
  };
  const onUploadProcess = (progress) => {
    console.log(progress);
    setProgress(Math.round(progress.loaded / progress.total) * 100);
  };

  return (
    <>
      <IKContext
        publicKey={import.meta.env.VITE_IK_PUBLIC_KEY}
        urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
        authenticator={authenticator}
      >
        <IKUpload
          // fileName="test-upload"
          useUniqueFileName
          onError={onError}
          onSuccess={onSuccess}
          onUploadProgress={onUploadProcess}
          className="hidden"
          ref={ref}
          accept={`${type}/*`}
        />
        <div className="cursor-pointer" onClick={() => ref.current.click()}>
          {children}
        </div>
      </IKContext>
    </>
  );
};
export default Upload;
