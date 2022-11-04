import axios from 'axios';

export default function NotifyEnv({title, body, fecha}){
    let sendFecha = fecha.toString();
    axios.post(`https://app.nativenotify.com/api/notification`, {
    appId: 4508,
    appToken: "sowSvgeeVrh2wxciVm0S6B",
    title: title,
    body: body,
    dateSent: sendFecha,
    pushData: { yourProperty: "yourPropertyValue" }
});
}