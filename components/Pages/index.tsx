import Component, { PageEl } from '@/components/Libs/Component';
import Copy from '@/components/Libs/Copy';
import Router from 'next/router'
import Window from '@/components/Libs/Window';
import TextBox from '@/components/Libs/TextBox';
import Icon2Titles from '@/components/Libs/Icon2Titles';
import Icon3Titles from '@/components/Libs/Icon3Titles';
import { url } from 'inspector';


export default p => Component(p, Page);
const Page: PageEl = (props, state, refresh, getProps) => {

  let styles = global.styles
  let name = ""


  return (
    <div style={{ direction: "rtl", minHeight: "11vh", }}>
      <br-x />

      <Window title={name} style={{
        minHeight: 500, margin: 10, width: "calc(100% - 20px)",
        backgroundImage: 'url("https://irmapserver.ir/research/39/Apple-tests-adding-news-to-the-native-Weather-app-in-iOS-16.2-Beta.jpg")'
      }}>

        {/* <pre style={{ direction: "ltr" }}>{JSON.stringify(props, null, 2)}</pre> */}






        <c-x>
          <br />
          <br />
          <f-cc style={{ fontSize: 30 }}>
            آب و هوا
          </f-cc>

          <f-cse>
            <f-cc style={{
              height: 300, width: 400,
              backgroundImage: 'url("https://irmapserver.ir/research/39/images%20%281%29.png")'
              , borderRadius: 250
            }}>
              <img src="https://irmapserver.ir/research/39/3534501.png"
                style={{ height: 80, objectFit: "contain", }} />

              <span style={{ fontSize: 38.5 }}>
                Feels Like : {props.feelslikec}° C
              </span>

            </f-cc>
            <f-cc style={{
              height: 300, width: 400,
              backgroundImage: 'url("https://irmapserver.ir/research/39/images%20%281%29.png")'
              , borderRadius: 250
            }}>

              <img src="https://irmapserver.ir/research/39/22222.png"
                style={{ height: 80, objectFit: "contain", }} />


              <span style={{ fontSize: 38.5 }}>
                Pressure : {props.pressure}
              </span>
            </f-cc>
          </f-cse>
          <br />
          <br />
          <br />
          <br />
          <br />
          <f-cc style={{ fontSize: 20 }}>
            Turing Reseach Group
          </f-cc>


        </c-x>

      </Window>
    </div>
  )
}


export async function getServerSideProps(context) {


  var session = await global.SSRVerify(context)
  var { uid, name, image, imageprop, lang, cchar,
    unit, workspace, servid, servsecret,
    usedquota, quota, quotaunit, status, regdate, expid,
    role, path, devmod, userip, } = session;

  let data = await (await fetch("https://irmapserver.ir/research/api/weather")).json()

  let feelslikec = data.current_condition[0].FeelsLikeC
  let cloudcover = data.current_condition[0].cloudcover
  let pressure = data.current_condition[0].pressure
  let visibility = data.current_condition[0].visibility


  return {
    props: {
      data: global.QSON.stringify({
        session,
        feelslikec,
        cloudcover,
        pressure,
        visibility,
        // nlangs,
      })
    },
  }
}