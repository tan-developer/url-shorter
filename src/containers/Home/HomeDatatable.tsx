import { Column } from "primereact/column";
import Datatable from "../../components/datatable/Datatable";
import { genCopy, genQrCode, genStatus } from "../../utils/generate-utils";

const HomeDatatable: React.FC = () => {
  return (
    <>
      <Datatable
        value={[
          {
            "short_link": "https://linkly.com/Bn41aCOImxj",
            "original_link": "https://www.twitter.com/tweets/BerelCoiu/",
            "qr_code": "QR Code",
            "clicks": 1313,
            "status": 1,
            "date": 1696896000
          },
          {
            "short_link": "https://linkly.com/Bn41aCOImxj",
            "original_link": "https://www.youtube.com/watch?v=8J7zmH0Kuik",
            "qr_code": "QR Code",
            "clicks": 4313,
            "status": 0,
            "date": 1696723200
          },
          {
            "short_link": "https://linkly.com/Bn41aCOImxj",
            "original_link": "https://www.adventuresinwanderlust.com/",
            "qr_code": "QR Code",
            "clicks": 1013,
            "status": 1,
            "date": 1696118400
          },
          {
            "short_link": "https://linkly.com/Bn41aCOImxj",
            "original_link": "https://vimeo.com/65257654",
            "qr_code": "QR Code",
            "clicks": 1313,
            "status": 0,
            "date": 1693526400
          },
          {
            "short_link": "https://linkly.com/Bn41aCOImxj",
            "original_link": "https://unsplash.com/photos/2JIKwO2rFvQ",
            "qr_code": "QR Code",
            "clicks": 1423,
            "status": 1,
            "date": 1693526400
          },
          {
            "short_link": "https://linkly.com/Bn41aCOImxj",
            "original_link": "https://unsplash.com/photos/2JIKwO2rFvQ",
            "qr_code": "QR Code",
            "clicks": 1423,
            "status": 1,
            "date": 1693526400
          },
          {
            "short_link": "https://linkly.com/Bn41aCOImxj",
            "original_link": "https://unsplash.com/photos/2JIKwO2rFvQ",
            "qr_code": "QR Code",
            "clicks": 1423,
            "status": 1,
            "date": 1693526400
          },
          {
            "short_link": "https://linkly.com/Bn41aCOImxj",
            "original_link": "https://unsplash.com/photos/2JIKwO2rFvQ",
            "qr_code": "QR Code",
            "clicks": 1423,
            "status": 1,
            "date": 1693526400
          },
          {
            "short_link": "https://linkly.com/Bn41aCOImxj",
            "original_link": "https://unsplash.com/photos/2JIKwO2rFvQ",
            "qr_code": "QR Code",
            "clicks": 1423,
            "status": 1,
            "date": 1693526400
          },
          {
            "short_link": "https://linkly.com/Bn41aCOImxj",
            "original_link": "https://unsplash.com/photos/2JIKwO2rFvQ",
            "qr_code": "QR Code",
            "clicks": 1423,
            "status": 1,
            "date": 1693526400
          },
          {
            "short_link": "https://linkly.com/Bn41aCOImxj",
            "original_link": "https://unsplash.com/photos/2JIKwO2rFvQ",
            "qr_code": "QR Code",
            "clicks": 1423,
            "status": 1,
            "date": 1693526400
          },
          {
            "short_link": "https://linkly.com/Bn41aCOImxj",
            "original_link": "https://unsplash.com/photos/2JIKwO2rFvQ",
            "qr_code": "QR Code",
            "clicks": 1423,
            "status": 1,
            "date": 1693526400
          }
        ]
        }
      >
        <Column field="short_link" header="Short Link" body={genCopy}/>
        <Column field="original_link" header="Original Link" />
        <Column field="clicks" header="Clicks" />
        <Column field="qr_code" header="Qrcode" body={genQrCode}/>
        <Column field="status" header="Status" body={genStatus}/>
        <Column sortable field="date" header="Date" />
      </Datatable>
    </>
  );
};



export default HomeDatatable
