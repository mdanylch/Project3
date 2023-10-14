import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Partners from "./Partners";

function App() {
  const [partners, setPartners] = useState([]);
  const [showPartners, setShowPartners] = useState(false);
  const [phoneNum, setPhoneNum] = useState("");

  useEffect(() => {
    getPartners()
  }, []);

  const getPartners = async () => {
    const res = await fetch("https://api.cisco-tac.com/partners");
    const json = await res.json();
    setPartners(json["partners-list"]);
    console.log(partners);
    console.log(":::", json);
  };

  const requestCb = async () => {
    const res = await fetch('https://api.wxcc-us1.cisco.com/v1/tasks', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer lJbjAuLk1GQW55X0JrZTRsaEVSNUowd29BZkEuMTFCOHpaaWxHY3dvZGVRNk5vQ3E3LUJPSEhVQ0U0SFNCcmZZTEUyLWFLdnZMcy1zWkxlVlBQM3hOVEl2LUFCTVIwMnRCckNOQTZtb2k5b2VNMmxTWVBhQ0lwSENPajNscGU3c1QwNTlKWFVjOENNSWNrYzZ0Sms1NVktU09VeXZ6bnVDWWVteWk4QmNsWDl3eWU0dDVrSWZGSGpfTVM1WHRGREFRM0thS2dpeUFIcktTTTAzMWpYS1lKcHlIN1RGaFdKSjVsVFNwaVNnYjROMFgyd25ORmVNZUxOaDJyRHV6SzFrVFp1dUFNX2o1Q1ZfYUZKVlZqYnJFOXZkTDR1OVI3ZHM4RHd3SU9hN0thY2xxOWotZ3pIR1ZwcV9RMXFTOGRSWGt2em5xNGVOb2xobGNJclRCUXlvdkozcDBSUFVIcFY0OXh3TGhGT1RIS2NkZTJvZmQ2V0EzQ1NzSTdhaXE3WWFpVzlLa3BycU44YWdfUjRuc2ZOdHA0TzJaaGFSOER3QWFCTjBBbVh6NnlzZXJHdThtMTVOYVlqTzd2NTdZajlqNmpsR1YyMFJWNVpfNER4MXpVVGYwY2tiR29qdFJ4d0piM1hvdkFXUlhENjdNVjRlX2dYeEt2M1ZTZlFGOXZWS0w0OVVFbU1Za2dicEpnc1ZxN1FncWdlSEluaUNRSWRidFBzNVhtNVg0Rkd6bFFiVzg2SDVHTWYtZGRpMEktRk1xeVBxNzlEM1NwUjBfb2hyckZNWndhRXJPbndEUHpPajg5dVF1TGZGYmluZ2NtTUM1bHUyZVlYRWxpeHhaMzY0OHFXc1l5WkdWdUNHRUUtNmZvVFFlWXZ4Ymw3OHR1VnVodFAyS09XSThHa3ZKbFdCY1B3QTljUWdpbm0wdkZ0VHZFMDhZRTU1QlU0b1N6d0lqbzFJRkpXTDd1WmpIZDFLNUtPeWJ0MHl0UEU3a0ZLMlFPZUhDWks5TFFBT2NLSG15ZmZybzRLSjk5ZVhWR2pWYTh1a3pNZXlxVzZ3TFZMc2VmdjJzYkxXR3JyVFZ0MHJ3dy5mN0VmMTZhTU9EeG8waUhBbkRJRmdRIiwidXNlcl90eXBlIjoidXNlciIsInRva2VuX2lkIjoiQWFaM3IwWWpObU9EZzVZamt0WmpabVpDMDBZbVV6TFdGaVpHUXROVEJoWWpRMk5HSmxNVE5qWXpjMFlXRmtZVGt0TldZMyIsInJlZmVyZW5jZV9pZCI6IjAwMzVhODYzLTI1YWEtNDRmMi1hOGMzLTJjOTYwMjc4NzU4ZSIsImlzcyI6Imh0dHBzOlwvXC9pZGJyb2tlci53ZWJleC5jb21cL2lkYiIsInVzZXJfbW9kaWZ5X3RpbWVzdGFtcCI6IjIwMjMxMDExMTQ0MjEwLjk4NloiLCJyZWFsbSI6IjgwZDNhYjRlLTg5NWMtNGEzOC05ODE1LTRjNTg1MTAwZDBiNCIsImNpc191dWlkIjoiNmM4MDVmNzYtM2FhZi00OGM1LWI5MDMtOGY1NTU0ZmNhOGZjIiwidG9rZW5fdHlwZSI6IkJlYXJlciIsImV4cGlyeV90aW1lIjoxNjk3MTgwNzA5NDkzLCJjbGllbnRfaWQiOiJDNTgyNTRmMzhjZTAwZWM3YWZkMWI2MDY2Zjk3ZTNjMjY4MGY4MTlmYWVmZTY4YTk2NTIxOTdhM2E5ZTE4ODdjNCJ9.NvqfdWSD4j0qEi8mdzsL4hn5mzZbN1fAvmgHckFnbsB2ScSWBEGQlGJbfUQE5zHWmb6MkpSi-Onm9v5hNYDRTqOZUSgU_Tc036VUvMvIRl2ahO1eYEoTIYs3buPS52OwDUpw1vTCasOmXiDOZ50zszYRx6V4iRmVLg5muQXWY2DRqOIACtmcJNls8JL69DuKAQDvhGrUZVy6GMvRi1OBMWFKM8sdr1lv-SlyD9389Ocf9CGHTXoqSRcrRuTd2V3qTJKLKYo6TD_7RMes21oEB2BjYet44hFRHTDtLaARPZ1NyZRA6aFjnfPpKM4VOZ1aj5x41ohJrck7uNVEMRGGYQ',
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "destination": phoneNum,
        "entryPointId": "a8bdef9a-79ce-45d3-ac55-268cccfa7569",
        "attributes": {},
        "outboundType": "CALLBACK",
        "mediaType": "telephony",
        "origin": "+15165309089",
        "callback": {
          "callbackOrigin": "web",
          "callbackType": "immediate"
        }
      })
    });
    const json = await res.json();
    console.log('res req cb: ', json);
    setPhoneNum("");
  };

  const submitRequestCb = (e) => {
    e.preventDefault();
    phoneNum && requestCb();
  };

  const emergencyCall = async () => {
    const res = await fetch('https://api.wxcc-us1.cisco.com/organization/80d3ab4e-895c-4a38-9815-4c585100d0b4/cad-variable/73c5c20e-7573-4d1b-b5f6-8172c41e70c3', {
      method: 'PUT',
      headers: {
        'Authorization': 'Bearer bHVzdGVyIjoiUEY4NCIsInByaXZhdGUiOiJleUpqZEhraU9pSktWMVFpTENKbGJtTWlPaUpCTVRJNFEwSkRMVWhUTWpVMklpd2lZV3huSWpvaVpHbHlJbjAuLk1GQW55X0JrZTRsaEVSNUowd29BZkEuMTFCOHpaaWxHY3dvZGVRNk5vQ3E3LUJPSEhVQ0U0SFNCcmZZTEUyLWFLdnZMcy1zWkxlVlBQM3hOVEl2LUFCTVIwMnRCckNOQTZtb2k5b2VNMmxTWVBhQ0lwSENPajNscGU3c1QwNTlKWFVjOENNSWNrYzZ0Sms1NVktU09VeXZ6bnVDWWVteWk4QmNsWDl3eWU0dDVrSWZGSGpfTVM1WHRGREFRM0thS2dpeUFIcktTTTAzMWpYS1lKcHlIN1RGaFdKSjVsVFNwaVNnYjROMFgyd25ORmVNZUxOaDJyRHV6SzFrVFp1dUFNX2o1Q1ZfYUZKVlZqYnJFOXZkTDR1OVI3ZHM4RHd3SU9hN0thY2xxOWotZ3pIR1ZwcV9RMXFTOGRSWGt2em5xNGVOb2xobGNJclRCUXlvdkozcDBSUFVIcFY0OXh3TGhGT1RIS2NkZTJvZmQ2V0EzQ1NzSTdhaXE3WWFpVzlLa3BycU44YWdfUjRuc2ZOdHA0TzJaaGFSOER3QWFCTjBBbVh6NnlzZXJHdThtMTVOYVlqTzd2NTdZajlqNmpsR1YyMFJWNVpfNER4MXpVVGYwY2tiR29qdFJ4d0piM1hvdkFXUlhENjdNVjRlX2dYeEt2M1ZTZlFGOXZWS0w0OVVFbU1Za2dicEpnc1ZxN1FncWdlSEluaUNRSWRidFBzNVhtNVg0Rkd6bFFiVzg2SDVHTWYtZGRpMEktRk1xeVBxNzlEM1NwUjBfb2hyckZNWndhRXJPbndEUHpPajg5dVF1TGZGYmluZ2NtTUM1bHUyZVlYRWxpeHhaMzY0OHFXc1l5WkdWdUNHRUUtNmZvVFFlWXZ4Ymw3OHR1VnVodFAyS09XSThHa3ZKbFdCY1B3QTljUWdpbm0wdkZ0VHZFMDhZRTU1QlU0b1N6d0lqbzFJRkpXTDd1WmpIZDFLNUtPeWJ0MHl0UEU3a0ZLMlFPZUhDWks5TFFBT2NLSG15ZmZybzRLSjk5ZVhWR2pWYTh1a3pNZXlxVzZ3TFZMc2VmdjJzYkxXR3JyVFZ0MHJ3dy5mN0VmMTZhTU9EeG8waUhBbkRJRmdRIiwidXNlcl90eXBlIjoidXNlciIsInRva2VuX2lkIjoiQWFaM3IwWWpObU9EZzVZamt0WmpabVpDMDBZbVV6TFdGaVpHUXROVEJoWWpRMk5HSmxNVE5qWXpjMFlXRmtZVGt0TldZMyIsInJlZmVyZW5jZV9pZCI6IjAwMzVhODYzLTI1YWEtNDRmMi1hOGMzLTJjOTYwMjc4NzU4ZSIsImlzcyI6Imh0dHBzOlwvXC9pZGJyb2tlci53ZWJleC5jb21cL2lkYiIsInVzZXJfbW9kaWZ5X3RpbWVzdGFtcCI6IjIwMjMxMDExMTQ0MjEwLjk4NloiLCJyZWFsbSI6IjgwZDNhYjRlLTg5NWMtNGEzOC05ODE1LTRjNTg1MTAwZDBiNCIsImNpc191dWlkIjoiNmM4MDVmNzYtM2FhZi00OGM1LWI5MDMtOGY1NTU0ZmNhOGZjIiwidG9rZW5fdHlwZSI6IkJlYXJlciIsImV4cGlyeV90aW1lIjoxNjk3MTgwNzA5NDkzLCJjbGllbnRfaWQiOiJDNTgyNTRmMzhjZTAwZWM3YWZkMWI2MDY2Zjk3ZTNjMjY4MGY4MTlmYWVmZTY4YTk2NTIxOTdhM2E5ZTE4ODdjNCJ9.NvqfdWSD4j0qEi8mdzsL4hn5mzZbN1fAvmgHckFnbsB2ScSWBEGQlGJbfUQE5zHWmb6MkpSi-Onm9v5hNYDRTqOZUSgU_Tc036VUvMvIRl2ahO1eYEoTIYs3buPS52OwDUpw1vTCasOmXiDOZ50zszYRx6V4iRmVLg5muQXWY2DRqOIACtmcJNls8JL69DuKAQDvhGrUZVy6GMvRi1OBMWFKM8sdr1lv-SlyD9389Ocf9CGHTXoqSRcrRuTd2V3qTJKLKYo6TD_7RMes21oEB2BjYet44hFRHTDtLaARPZ1NyZRA6aFjnfPpKM4VOZ1aj5x41ohJrck7uNVEMRGGYQ',
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "active": true,
        "agentEditable": false,
        "agentViewable": false,
        "createdTime": 0,
        "defaultValue": true,
        "description": "",
        "desktopLabel": "",
        "id": "73c5c20e-7573-4d1b-b5f6-8172c41e70c3",
        "lastUpdatedTime": 0,
        "name": "Emergency",
        "organizationId": "",
        "reportable": false,
        "variableType": "String",
        "version": 0
      })
    });
    const json = await res.json();
    console.log("res emergency: ", json);
  };

  return (
    <div className="App">
      <header>
        <a
        target="_blank"
        href="https://maps.app.goo.gl/n2rCXuheZcpPXrGL7"
        >Event Location</a>
        <div className="flex-align-center">
          <div
            onClick={() => {getPartners(); setShowPartners(true)}}
            style={{ marginRight: 20, cursor: "pointer" }}
          >
            Partners
          </div>
          <div>Schedule</div>
        </div>
      </header>
      {partners?.length && showPartners &&
        <Partners partnerList={partners} close={() => setShowPartners(false)} />
      }
      <main className="App-main">
        <img src={logo} className="App-logo" alt="logo" />

        <h2>
          Troubleshooting Summit <b>2023</b>
        </h2>
        <p>
          The session is focused on enduring the partners' troubleshooting
          skills
        </p>

        <form className="App-form" onSubmit={submitRequestCb}>
          <input
            className="App-input"
            onChange={(e) => setPhoneNum(e.currentTarget.value)}
            type="tel"
            placeholder="Phone"
            value={phoneNum}
          />
          <a
            className="App-link"
            target="_blank"
            rel="noopener noreferrer"
            onClick={submitRequestCb}
          >
            Request Callback
          </a>
        </form>
        <a
          className="App-emergency"
          target="_blank"
          rel="noopener noreferrer"
          onClick={emergencyCall}
        >
          Emergency
        </a>
      </main>
    </div>
  );
}

export default App;
