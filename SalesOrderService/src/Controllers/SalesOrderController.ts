import axios from "axios";
import "dotenv/config";
//import { auth } from "../types/auth";
import console from "console";
import { json } from "stream/consumers";

// const hostName: string | undefined = process.env.HOSTNAME;
// const username: string | undefined = process.env.NAME;
// const password: string | undefined = process.env.PASSWORD;

// const salesOrder: SalesOrder[] = [];
// const salesOrderDetails: SalesOrdersDetails[] = [];
// const salesOrderItems: SalesOrderItems[] = [];
// const salesOrderAttachment: SalesOrderAttachment[] = [];


class SalesOrderController {
  // public static async get_Token(): Promise<any> {
  //   // let temp: auth = {
  //   //   token: "",
  //   //   cookies: "",
  //   // };
  //   // let d = "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c2FtbDI6QXNzZXJ0aW9uIHhtbG5zOnNhbWwyPSJ1cm46b2FzaXM6bmFtZXM6dGM6U0FNTDoyLjA6YXNzZXJ0aW9uIiBJRD0iNjY1NDM3ZjEtMzNhYy00YWUzLWJmMzAtMTAyMDVkYTFmMTRjIiBJc3N1ZUluc3RhbnQ9IjIwMjMtMDItMDlUMTA6MTM6MjYuMzQ2WiIgVmVyc2lvbj0iMi4wIiB4bWxuczp4cz0iaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEiIHhtbG5zOnhzaT0iaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEtaW5zdGFuY2UiPjxzYW1sMjpJc3N1ZXI+d3d3LnN1Y2Nlc3NmYWN0b3JzLmNvbS9vYXV0aC9pZHA8L3NhbWwyOklzc3Vlcj48ZHM6U2lnbmF0dXJlIHhtbG5zOmRzPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjIj4KPGRzOlNpZ25lZEluZm8geG1sbnM6ZHM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvMDkveG1sZHNpZyMiPgo8ZHM6Q2Fub25pY2FsaXphdGlvbk1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvMTAveG1sLWV4Yy1jMTRuIyIgeG1sbnM6ZHM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvMDkveG1sZHNpZyMiLz4KPGRzOlNpZ25hdHVyZU1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvMDQveG1sZHNpZy1tb3JlI3JzYS1zaGEyNTYiIHhtbG5zOmRzPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjIi8+CjxkczpSZWZlcmVuY2UgVVJJPSIjNjY1NDM3ZjEtMzNhYy00YWUzLWJmMzAtMTAyMDVkYTFmMTRjIiB4bWxuczpkcz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC8wOS94bWxkc2lnIyI+CjxkczpUcmFuc2Zvcm1zIHhtbG5zOmRzPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjIj4KPGRzOlRyYW5zZm9ybSBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvMDkveG1sZHNpZyNlbnZlbG9wZWQtc2lnbmF0dXJlIiB4bWxuczpkcz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC8wOS94bWxkc2lnIyIvPgo8ZHM6VHJhbnNmb3JtIEFsZ29yaXRobT0iaHR0cDovL3d3dy53My5vcmcvMjAwMS8xMC94bWwtZXhjLWMxNG4jIiB4bWxuczpkcz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC8wOS94bWxkc2lnIyI+PGVjOkluY2x1c2l2ZU5hbWVzcGFjZXMgeG1sbnM6ZWM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvMTAveG1sLWV4Yy1jMTRuIyIgUHJlZml4TGlzdD0ieHMiLz48L2RzOlRyYW5zZm9ybT4KPC9kczpUcmFuc2Zvcm1zPgo8ZHM6RGlnZXN0TWV0aG9kIEFsZ29yaXRobT0iaHR0cDovL3d3dy53My5vcmcvMjAwMC8wOS94bWxkc2lnI3NoYTEiIHhtbG5zOmRzPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjIi8+CjxkczpEaWdlc3RWYWx1ZSB4bWxuczpkcz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC8wOS94bWxkc2lnIyI+ZjF6T2ozRmR4SmRIakUvQ0xkejJwRTRPSWhVPTwvZHM6RGlnZXN0VmFsdWU+CjwvZHM6UmVmZXJlbmNlPgo8L2RzOlNpZ25lZEluZm8+CjxkczpTaWduYXR1cmVWYWx1ZSB4bWxuczpkcz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC8wOS94bWxkc2lnIyI+Ckc1TGZxQXNKMHJlQk1UMnRWL2pmSlJ3Ulo4Tk1OQTlYeDd2QXp2dkwwdXRZQ3FERGw2MlJOSUM3OGtPdU5xMzBUZVdRS1FiNnhRYjcKRVgwZ3JYN1N4T1hzejdlL1N6a0pOYzZCZHRmMzBZejJjRlVSMGVkelZRai9ya2F2QlR3STR1TExrZkdGQnJNUE1YblJkL1MxVk1LcQo1Z1pKMnRoYk1kVEtkNWxGZHp4aVhhcjMyY2JlcGQrc1NkMk5welpWUGdzb2Ewb3U5WVdMek5GWC9aUTJkMFllczdhR0Y3RlJTUXR1Ci9jK1IwSmRNZ2FWK09xZnRTR0tNVi9ScXgyTjBKdk1zYUxvMXpNY1AwRml5YzF0RkFXTWxiaXBUOW1IVy8rRTJNa2Q1RGNMS09xcHMKaUFidnZGNldoMVJBVGUxUE9kenltbm9vaFp6aENBRVRqMWpoNkE9PQo8L2RzOlNpZ25hdHVyZVZhbHVlPgo8ZHM6S2V5SW5mbz48ZHM6WDUwOURhdGE+PGRzOlg1MDlDZXJ0aWZpY2F0ZT5NSUlDRFRDQ0FYYWdBd0lCQWdJRVRKajlMakFOQmdrcWhraUc5dzBCQVFVRkFEQkxNUXN3Q1FZRFZRUUdFd0pWVXpFYk1Ca0dBMVVFCkNoTVNVM1ZqWTJWemMyWmhZM1J2Y25NdVkyOXRNUXd3Q2dZRFZRUUxFd05QY0hNeEVUQVBCZ05WQkFNVENGTkdJRUZrYldsdU1CNFgKRFRFd01Ea3lNVEU0TkRVd01sb1hEVEkxTURreE9URTRORFV3TWxvd1N6RUxNQWtHQTFVRUJoTUNWVk14R3pBWkJnTlZCQW9URWxOMQpZMk5sYzNObVlXTjBiM0p6TG1OdmJURU1NQW9HQTFVRUN4TURUM0J6TVJFd0R3WURWUVFERXdoVFJpQkJaRzFwYmpDQm56QU5CZ2txCmhraUc5dzBCQVFFRkFBT0JqUUF3Z1lrQ2dZRUFyQTlSTE5uTDlQdDZ4eW5GZllmYThWWEFYRkRHOVk4eGtnczNsaElPbHNqcUVZd2IKU29naGlxSklKdmZZTTQ1a3gzYUI3WnJOOTZ0QVI1dVV1cEVzdS9HY1M2QUN4aGZydVcrQlk2dXc4djYvdzJ2WGhCZGZGakJvTytLZQpMeDRrM2xsbGVWZ0tzbU5sZjgxb2tPWHYxcmVlOHdFcmZaM3Nzbk54a3VRZ0dCMENBd0VBQVRBTkJna3Foa2lHOXcwQkFRVUZBQU9CCmdRQmVCQ1NNRm5ZOFRCNmp0V29TUC9sb3JCdWRocHRndk83LzNyK2wvUUswaGRrNkNWditWUW1TaWxOUGdXVmdVOWt0WkdiTmtaaHcKSWd3bnFJUUhBaTY2MzF1ZmtZUUpCKzQ4WVVlMXEvcHY2RVdhZUl3R3ZjR1lTWFpwL0UvYUdaUHRjZVRJWEZQZnFPeUhRb0Z0YjBucQpNTUZXb0RocFhVSG1scm95VGM5c0pnPT08L2RzOlg1MDlDZXJ0aWZpY2F0ZT48L2RzOlg1MDlEYXRhPjwvZHM6S2V5SW5mbz48L2RzOlNpZ25hdHVyZT48c2FtbDI6U3ViamVjdD48c2FtbDI6TmFtZUlEIEZvcm1hdD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6MS4xOm5hbWVpZC1mb3JtYXQ6dW5zcGVjaWZpZWQiPlRFQ0hOSUNBTF9VU0VSX0NJQ09URVJNSU5BTF85RDNGOEFDMTwvc2FtbDI6TmFtZUlEPjxzYW1sMjpTdWJqZWN0Q29uZmlybWF0aW9uIE1ldGhvZD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOmNtOmJlYXJlciI+PHNhbWwyOlN1YmplY3RDb25maXJtYXRpb25EYXRhIE5vdE9uT3JBZnRlcj0iMjAyMy0wMi0wOVQxMDoyMzoyNi4zNDZaIiBSZWNpcGllbnQ9Imh0dHBzOi8vYXBpMjMuc2Fwc2YuY29tL291dGgvdG9rZW4iLz48L3NhbWwyOlN1YmplY3RDb25maXJtYXRpb24+PC9zYW1sMjpTdWJqZWN0PjxzYW1sMjpDb25kaXRpb25zIE5vdEJlZm9yZT0iMjAyMy0wMi0wOVQxMDowMzoyNi4zNDZaIiBOb3RPbk9yQWZ0ZXI9IjIwMjMtMDItMDlUMTA6MjM6MjYuMzQ2WiI+PHNhbWwyOkF1ZGllbmNlUmVzdHJpY3Rpb24+PHNhbWwyOkF1ZGllbmNlPnd3dy5zdWNjZXNzZmFjdG9ycy5jb208L3NhbWwyOkF1ZGllbmNlPjwvc2FtbDI6QXVkaWVuY2VSZXN0cmljdGlvbj48L3NhbWwyOkNvbmRpdGlvbnM+PHNhbWwyOkF1dGhuU3RhdGVtZW50IEF1dGhuSW5zdGFudD0iMjAyMy0wMi0wOVQxMDoxMzoyNi4zNDZaIiBTZXNzaW9uSW5kZXg9ImJlZmM5NGQ0LTk4OGEtNGRkYi1iZGI1LWFlNDdkYTM0OGI0ZCI+PHNhbWwyOkF1dGhuQ29udGV4dD48c2FtbDI6QXV0aG5Db250ZXh0Q2xhc3NSZWY+dXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOmFjOmNsYXNzZXM6UGFzc3dvcmRQcm90ZWN0ZWRUcmFuc3BvcnQ8L3NhbWwyOkF1dGhuQ29udGV4dENsYXNzUmVmPjwvc2FtbDI6QXV0aG5Db250ZXh0Pjwvc2FtbDI6QXV0aG5TdGF0ZW1lbnQ+PHNhbWwyOkF0dHJpYnV0ZVN0YXRlbWVudD48c2FtbDI6QXR0cmlidXRlIE5hbWU9ImFwaV9rZXkiPjxzYW1sMjpBdHRyaWJ1dGVWYWx1ZSB4c2k6dHlwZT0ieHM6c3RyaW5nIj5Zall4WmpBeU9EQXpabUptWldOak16azJNakl3TVdJM01UVmtNdzwvc2FtbDI6QXR0cmlidXRlVmFsdWU+PC9zYW1sMjpBdHRyaWJ1dGU+PC9zYW1sMjpBdHRyaWJ1dGVTdGF0ZW1lbnQ+PC9zYW1sMjpBc3NlcnRpb24+"
  //   // var config2 = {
  //   //   method: "post",
  //   //   url: `https://api23.sapsf.com/oauth/token`,
  //   //   maxBodyLength: Infinity,
  //   //   headers: {
  //   //       'Content-Type': 'application/x-www-form-urlencoded',
  //   //   },
  //   //   data:'company_id=extrauniteD&client_id=YjYxZjAyODAzZmJmZWNjMzk2MjIwMWI3MTVkMw&grant_type=urn:ietf:params:oauth:grant-type:saml2-bearer&user_id=TECHNICAL_USER_CICOTERMINAL_9D3F8AC1&assertion='+d,
  //   // };
  //   // await axios(config2)
  //   //   .then(async function (response2) {
  //   //     console.log("tokenin: "+response2.data.access_token)
  //   //     //return response2.data.access_token;
  //   //   })
  //   //   .catch(function (error1) {
  //   //     console.log("error token: " + error1);
  //   //   });
  //   var config1 = {
  //     method: "post",
  //     url: `https://api23.sapsf.com/oauth/idp`,
  //     maxBodyLength: Infinity,
  //     headers: {
  //         'Content-Type': 'application/x-www-form-urlencoded',
  //     },
  //     data:'client_id=YjYxZjAyODAzZmJmZWNjMzk2MjIwMWI3MTVkMw&user_id=TECHNICAL_USER_CICOTERMINAL_9D3F8AC1&token_url=https://api23.sapsf.com/outh/token&private_key=TUlJRXZBSUJBREFOQmdrcWhraUc5dzBCQVFFRkFBU0NCS1l3Z2dTaUFnRUFBb0lCQVFDRkRCenBFWFNHYzZ0cldCRXdUTXErNVZjaEJnb3dGVnJWVzA4MDRhR0l2SDB1eCsrUW56UlNaUEFQODBWRzY3ZHZsajVhOEh3bHBOK1V5Wm02UkFZZ04vZXljN09UTHR0enRKRld1TkNXMWtBa3pOc0hOd1l4YXplb1dWYUFzZkRZUlg3aG1hRzJiUjY3RDBieEd1eDNPZUxibHZONUNaTEVjZ2oweWpVc3BEay9TeGdlT2htWlFMMTA3Yi80NitwZ3FNRVJKNlJ1L3RQZzZod0xxTGt4bHNoYWFRdTRsOW1LVU85eDZtYTFTZEpvN1JGT0g0Mklqb1dPQ09teVorRisxVkJSNTlVU2pWWnJUbGhnSDArOEI3eTZDM3VmcERmalg2VVVTbWdqTSt2VzJzYm9WblJ2b3VmOVhuakRvclNRYkpENE9RWGh0N0RlMjdOYmdERzFBZ01CQUFFQ2dnRUFVcVZSbUIyMXFvZFRwbHlRWU5aeTR0NEhuNFhtOGpOeHR6TC9JclE5NlhoY3NxQ1QyZHhyWGZ0QmZFYjdjN0Njdy80cVFjYzg5dzFSclZVRjMwUytJV2xpdmtGTS9WS1FFM0hKRG52RFpzODBEU2dMcnBHcGtTMHU1NjZISTI1bFU1TG4zQy9ZMmo4eVpiUjV0dStvais4dlVvU1VQVTJMRStoYVUrVC8zdmhETmZlN3pXUkFtT0ZtMU1CSmpkckF2dENhTTRkekd5N0NTeU02dFJvaWJDZStkNDZNN2kyQVZVR2RVOGJUb0YvZURsTk1BM3d2WVhJU2t2YUtYczJyWCtLaFJ6U3dtdzczOWtYRWI3VjUxVXc0MWJUdjdEbnFKaUZYa21HY3E3clRTMnpPeWxVT0JYakNyUGVtOVlkbGdPL1FibFoxWHMwT0xDZXdNaHM1U1FLQmdRRGVGZmNCL3VzVUlnUHFNM0QxZkpqbldBZytGSlhIWklxZFJqemhnUklsTkw5azR6dGMyL2R0Q2ozSHdOV1kxVEdTT0w2M3JBYlZkU2QveU85Y3V2VU1odnZVSzRXQWdQOGlPeVBZS0NGWWdnNTBIMXBNcDJQWGpRU2JKa3Q0elQzWlZDVlFuZ3J0WlBQZER1VFZpOUNwQ2pQUnlBVzBiZlRGOTgrWFh1VW5rd0tCZ1FDWlhWcERWMXpyTXNoRC9qSGJULzAvUkR0OUhNZnp2T2dQcDVWYjVKSFR1WkUwejJYbDZ4WlQ2Ry9ucmdsbW5OTW11MHYwSlhqZ0lwWUZreU5OUlBpeXBpTm5Zd0VadjZicEtQTGJWelZIL1ZRSlpOY0JEcWJXTzBzck5hTmh6UkQ2NmoxM1FGOTQxdG1aL25JUkd6czBsZGltMmU1TWVmaTljVWVGRGViK2x3S0JnRzhnUElYaUlZemtiR01QTkhHUjFBekdqdkZKYVp6cElUY0xRMEZ2VFQ0U3c4WmVzWUNJaktraUc4SE5LdFFic1g5Q0o2Uk9UdWtXZ3hvODJCRGxkK0s1MUY3WkhDY3Q1UHdpN1krbW5QRGx1d2U5L0hnb3RodlFjMEtUQ2VhN2hEd3dENi9rTlFHT3B6dXd6UzVSbEtwUThaY0I2R0RkT0VLcStsUDY1dDFEQW9HQWJNbWpkWkZMQUN1TmsyMkV3Q1VGWnhObmYyQWpGZW95VXFoMWNqRzRuNDlLU1VPMDdGck9BOGNsV2hwQjROL3RoOVBrRk5OZjR0Mmx2VjZaOC8yd3pFaTlaR0QrTHQyYjhGaHpyTk0zb0ZFNmcwOWNsQXRvblI2Q082eFlzTTlkOUI2a2F5cm1qamtaTWZzanZxNnFXS3JTZThpckdPU01aUlV0dmx3V054RUNnWUE0QXZSU20vb3JGOTN2c0YxVW5PNTRCOTlLVWo1Z2VORyswVHp4ZHMxb3VSeW9MeGVBckl4YTVzdWlKbWg0a2JIZ1IrZEsyTEpCR2xtRzg0bTZQNjhJOXVCSCtpMjBQbXlQZm1RMEE2RjA0QmFZSHlvbDdzUU9DSHkrUjFmOUdZYzRFUlkwZUk1ZHd1ZTZjOTNPSWg1K2F5a0lKNExwS21sM0M0Z1o0QkxlQ0E9PSMjI2V4dHJhdW5pdGVE',
  //   };
  //   await axios(config1)
  //     .then(async function (response1) {
  //       console.log("auth:")
  //       var config2 = {
  //         method: "post",
  //         url: `https://api23.sapsf.com/oauth/token`,
  //         maxBodyLength: Infinity,
  //         headers: {
  //             'Content-Type': 'application/x-www-form-urlencoded',
  //         },
  //         data:'company_id=extrauniteD&client_id=YjYxZjAyODAzZmJmZWNjMzk2MjIwMWI3MTVkMw&grant_type=urn:ietf:params:oauth:grant-type:saml2-bearer&user_id=TECHNICAL_USER_CICOTERMINAL_9D3F8AC1&assertion='+response1.data,
  //       };
  //       await axios(config2)
  //         .then(async function (response2) {
  //           console.log("tokenin: ");
  //           //res.status(200).json(response2.data);
  //           return response2.data.access_token;
  //         })
  //         .catch(function (error1) {
  //           console.log( error1);
  //           //return error1;
  //         });
  //     })
  //     .catch(function (error2) {
  //       console.log(error2);
  //       //return error2;
  //     });
    
  // }
  async addSalesOrderWithRef(req: any, res: any): Promise<void> {
    const { employeeID, dateTime, status } = req.body;
    console.log(req.body)
    //res.status(200).json(req.body);
    //let employeeID="100127"
    //let status="P10"
    var config1 = {
      method: "post",
      url: `https://api23.sapsf.com/oauth/idp`,
      maxBodyLength: Infinity,
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
      },
      data:'client_id=YjYxZjAyODAzZmJmZWNjMzk2MjIwMWI3MTVkMw&user_id=TECHNICAL_USER_CICOTERMINAL_9D3F8AC1&token_url=https://api23.sapsf.com/outh/token&private_key=TUlJRXZBSUJBREFOQmdrcWhraUc5dzBCQVFFRkFBU0NCS1l3Z2dTaUFnRUFBb0lCQVFDRkRCenBFWFNHYzZ0cldCRXdUTXErNVZjaEJnb3dGVnJWVzA4MDRhR0l2SDB1eCsrUW56UlNaUEFQODBWRzY3ZHZsajVhOEh3bHBOK1V5Wm02UkFZZ04vZXljN09UTHR0enRKRld1TkNXMWtBa3pOc0hOd1l4YXplb1dWYUFzZkRZUlg3aG1hRzJiUjY3RDBieEd1eDNPZUxibHZONUNaTEVjZ2oweWpVc3BEay9TeGdlT2htWlFMMTA3Yi80NitwZ3FNRVJKNlJ1L3RQZzZod0xxTGt4bHNoYWFRdTRsOW1LVU85eDZtYTFTZEpvN1JGT0g0Mklqb1dPQ09teVorRisxVkJSNTlVU2pWWnJUbGhnSDArOEI3eTZDM3VmcERmalg2VVVTbWdqTSt2VzJzYm9WblJ2b3VmOVhuakRvclNRYkpENE9RWGh0N0RlMjdOYmdERzFBZ01CQUFFQ2dnRUFVcVZSbUIyMXFvZFRwbHlRWU5aeTR0NEhuNFhtOGpOeHR6TC9JclE5NlhoY3NxQ1QyZHhyWGZ0QmZFYjdjN0Njdy80cVFjYzg5dzFSclZVRjMwUytJV2xpdmtGTS9WS1FFM0hKRG52RFpzODBEU2dMcnBHcGtTMHU1NjZISTI1bFU1TG4zQy9ZMmo4eVpiUjV0dStvais4dlVvU1VQVTJMRStoYVUrVC8zdmhETmZlN3pXUkFtT0ZtMU1CSmpkckF2dENhTTRkekd5N0NTeU02dFJvaWJDZStkNDZNN2kyQVZVR2RVOGJUb0YvZURsTk1BM3d2WVhJU2t2YUtYczJyWCtLaFJ6U3dtdzczOWtYRWI3VjUxVXc0MWJUdjdEbnFKaUZYa21HY3E3clRTMnpPeWxVT0JYakNyUGVtOVlkbGdPL1FibFoxWHMwT0xDZXdNaHM1U1FLQmdRRGVGZmNCL3VzVUlnUHFNM0QxZkpqbldBZytGSlhIWklxZFJqemhnUklsTkw5azR6dGMyL2R0Q2ozSHdOV1kxVEdTT0w2M3JBYlZkU2QveU85Y3V2VU1odnZVSzRXQWdQOGlPeVBZS0NGWWdnNTBIMXBNcDJQWGpRU2JKa3Q0elQzWlZDVlFuZ3J0WlBQZER1VFZpOUNwQ2pQUnlBVzBiZlRGOTgrWFh1VW5rd0tCZ1FDWlhWcERWMXpyTXNoRC9qSGJULzAvUkR0OUhNZnp2T2dQcDVWYjVKSFR1WkUwejJYbDZ4WlQ2Ry9ucmdsbW5OTW11MHYwSlhqZ0lwWUZreU5OUlBpeXBpTm5Zd0VadjZicEtQTGJWelZIL1ZRSlpOY0JEcWJXTzBzck5hTmh6UkQ2NmoxM1FGOTQxdG1aL25JUkd6czBsZGltMmU1TWVmaTljVWVGRGViK2x3S0JnRzhnUElYaUlZemtiR01QTkhHUjFBekdqdkZKYVp6cElUY0xRMEZ2VFQ0U3c4WmVzWUNJaktraUc4SE5LdFFic1g5Q0o2Uk9UdWtXZ3hvODJCRGxkK0s1MUY3WkhDY3Q1UHdpN1krbW5QRGx1d2U5L0hnb3RodlFjMEtUQ2VhN2hEd3dENi9rTlFHT3B6dXd6UzVSbEtwUThaY0I2R0RkT0VLcStsUDY1dDFEQW9HQWJNbWpkWkZMQUN1TmsyMkV3Q1VGWnhObmYyQWpGZW95VXFoMWNqRzRuNDlLU1VPMDdGck9BOGNsV2hwQjROL3RoOVBrRk5OZjR0Mmx2VjZaOC8yd3pFaTlaR0QrTHQyYjhGaHpyTk0zb0ZFNmcwOWNsQXRvblI2Q082eFlzTTlkOUI2a2F5cm1qamtaTWZzanZxNnFXS3JTZThpckdPU01aUlV0dmx3V054RUNnWUE0QXZSU20vb3JGOTN2c0YxVW5PNTRCOTlLVWo1Z2VORyswVHp4ZHMxb3VSeW9MeGVBckl4YTVzdWlKbWg0a2JIZ1IrZEsyTEpCR2xtRzg0bTZQNjhJOXVCSCtpMjBQbXlQZm1RMEE2RjA0QmFZSHlvbDdzUU9DSHkrUjFmOUdZYzRFUlkwZUk1ZHd1ZTZjOTNPSWg1K2F5a0lKNExwS21sM0M0Z1o0QkxlQ0E9PSMjI2V4dHJhdW5pdGVE',
    };
    await axios(config1)
      .then(async function (response1) {
        console.log("auth:")
        var config2 = {
          method: "post",
          url: `https://api23.sapsf.com/oauth/token`,
          maxBodyLength: Infinity,
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
          },
          data:'company_id=extrauniteD&client_id=YjYxZjAyODAzZmJmZWNjMzk2MjIwMWI3MTVkMw&grant_type=urn:ietf:params:oauth:grant-type:saml2-bearer&user_id=TECHNICAL_USER_CICOTERMINAL_9D3F8AC1&assertion='+response1.data,
        };
        await axios(config2)
          .then(async function (response2) {
            console.log("tokenin: ");
            //res.status(200).json(response2.data);
            //return response2.data.access_token;
            let config3 = {
              method: "post",
              url: `https://api23.sapsf.com/rest/timemanagement/timeeventprocessing/v1/TimeEvents`,
              headers: {
                'Content-Type': 'application/json', 
                'Accept': 'application/json', 
                'Authorization': 'Bearer '+ response2.data.access_token
              },
              data: JSON.stringify([
                {
                  "id": "2",
                  "assignmentId": employeeID,
                  "terminalId": "T1",
                  "typeCode": status,
                  "timestamp": dateTime
                }
              ])
            };
            await axios(config3)
              .then(function (response) {
                console.log(response.data);
              })
              .catch(function (error) {
                console.log(error);
              });
          })
          .catch(function (error1) {
            console.log( error1);
            //return error1;
          });
      })
      .catch(function (error2) {
        console.log(error2);
        //return error2;
      });
      ///////////////////////////////////////////////
    //let token: any = await SalesOrderController.get_Token();
    //console.log(token)
    //let objectID: String = "";
    //create empty sales order
    
    // let config1 = {
    //   method: "post",
    //   url: `https://api23.sapsf.com/rest/timemanagement/timeeventprocessing/v1/TimeEvents`,
    //   headers: {
    //     'Content-Type': 'application/json', 
    //     'Accept': 'application/json', 
    //     'Authorization': 'Bearer '+token
    //   },
    //   data: JSON.stringify([
    //     {
    //       "id": "2",
    //       "assignmentId": "100127",
    //       "terminalId": "T1",
    //       "typeCode": "P20",
    //       "timestamp": "2023-01-05T20:00:21+02:00"
    //     }
    //   ])
    // };
    // await axios(config1)
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error.response.data);
    //   });
    //link sales order with sales quote
    // let config2 = {
    //   method: "post",
    //   url: `https://${hostName}.sapbydesign.com/sap/byd/odata/cust/v1/rsalesorder/AddReferenceWithDataProvision?ObjectID='${objectID}'&BusinessTransactionDocumentKey_BusinessTransactionDocumentID='${req.params.quoteID}'&BusinessTransactionDocumentKey_BusinessTransactionDocumentTypeCode='30'`,
    //   headers: {
    //     Authorization:
    //       "Basic " + Buffer.from(userName + ":" + password).toString("base64"),
    //     "x-csrf-token": authObj.token,
    //     Cookie: authObj.cookies,
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //   },
    // };
    // await axios(config2)
    //   .then(function (response1) {
    //     res.status(200).send(response1.data);
    //   })
    //   .catch(function (error1) {
    //     console.log(error1);
    //     res.status(200).json("error1");
    //   });
  }
  // async addSalesOrder(req: any, res: any): Promise<void> {
  //   const { customerID, hostName, userName, password } = req.query;

  //   let config = {
  //     method: "get",
  //     url: `https://${hostName}.sapbydesign.com/sap/byd/odata/cust/v1/rsalesorder`,
  //     headers: {
  //       Authorization:
  //         "Basic " + Buffer.from(userName + ":" + password).toString("base64"),
  //       "x-csrf-token": "fetch",
  //     },
  //   };
  //   let token: any = await axios(config)
  //     .then(function (response) {
  //       let token = response.headers["x-csrf-token"];
  //       let cookies: any = response.headers["set-cookie"];
  //       let tokenObj = {
  //         token: token,
  //         cookies: cookies,
  //       };
  //       return tokenObj;
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //       res.status(200).json("error" + error);
  //     });
  //   console.log(req.body);

  //   let config1 = {
  //     method: "post",
  //     url: `https://${hostName}.sapbydesign.com/sap/byd/odata/cust/v1/rsalesorder/SalesOrderCollection`,
  //     headers: {
  //       Authorization:
  //         "Basic " + Buffer.from(userName + ":" + password).toString("base64"),
  //       "x-csrf-token": token.token,
  //       Cookie: token.cookies,
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //     data: JSON.stringify({
  //       ExternalReference: req.body.externalReference,
  //       DistributionChannelCode: req.body.distributionChannelCode,
  //       SalesUnitParty: {
  //         PartyID: req.body.salesUnitPartyID,
  //       },
  //       BuyerParty: {
  //         PartyID: req.body.buyerPartyID,
  //       },
  //       PricingTerms: {
  //         CurrencyCode: req.body.currencyCode,
  //         GrossAmountIndicator: false, ///
  //       },
  //       Item: req.body.items,
  //     }),
  //   };
  //   let salesOrder = await axios(config1)
  //     .then(function (response) {
  //       res.status(200).json(response.data);
  //     })
  //     .catch(function (error) {
  //       console.log(error.response.data);
  //       res.status(200).json("error" + error.response.data);
  //     });
  // }
  // getSalesOrder(req: any, res: any): void {
  //   const salesOrderItems: SalesOrderItems[] = [];
  //   const salesOrderAttachment: SalesOrderAttachment[] = [];
  //   const salesOrderDetails: SalesOrdersDetails[] = [];

  //   const orderID = req.params.orderID;
  //   const { customerID, hostName, userName, password } = req.query;

  //   var config = {
  //     method: "get",
  //     // url: `https://${hostName}.sapbydesign.com/sap/byd/odata/cust/v1/rcustomerquote/CustomerQuoteCollection?$format=json&$expand=BuyerParty&$select=ID,NetAmount,DateTime,LifeCycleStatusCodeText,BuyerParty`,
  //     url: `https://${hostName}.sapbydesign.com/sap/byd/odata/cust/v1/rsalesorder/SalesOrderCollection?$format=json&$filter=ID%20eq%20%27${orderID}%27&$expand=Item/ItemProduct,Item/ItemScheduleLine,Item/ItemPriceAndTaxCalculation/ItemPriceComponent,Item/ItemText,AttachmentFolder,Text,PriceAndTaxCalculation/PriceComponent,BuyerParty/BuyerPartyName,BuyerParty/AddressSnapshot/AddressSnapshotFormattedAddress,BuyerParty/ContactAddressSnapshot,Item/ItemPriceAndTaxCalculation/SalesOrderItemProductTaxDetails`,
  //     headers: {
  //       Authorization:
  //         "Basic " + Buffer.from(userName + ":" + password).toString("base64"),
  //     },
  //   };
  //   // console.log(id);

  //   axios(config)
  //     .then(function (response) {
  //       let obj = response.data.d.results;
  //       // console.log(obj);
  //       obj.forEach((ele: any) => {
  //         // console.log(ele);
  //         let itemObj = ele.Item;
  //         itemObj.forEach((ele: any) => {
  //           let itemTaxObj = ele.ItemPriceAndTaxCalculation.SalesOrderItemProductTaxDetails
  //           let priceComponent =
  //             ele.ItemPriceAndTaxCalculation.ItemPriceComponent;
  //           let listPriceObj = priceComponent.find(
  //             (ele: { Description: string }) => {
  //               if (ele.Description == "List Price") return true;
  //             }
  //           );
  //           let itemDiscountObj = priceComponent.find(
  //             (ele: { Description: string }) => {
  //               if (ele.Description == "Product Discount (%)") return true;
  //             }
  //           );
  //           let itemNetValueObj = priceComponent.find(
  //             (ele: { Description: string }) => {
  //               if (ele.Description == "Total Item Net Value") return true;
  //             }
  //           );
  //           // let itemTaxObj = priceComponent.find(
  //           //   (ele: { Description: string }) => {
  //           //     if (ele.Description == "Value Added Tax (%)") return true;
  //           //   }
  //           // );
  //           let itemNotesObj = ele.ItemText.find(
  //             (ele: { TypeCodeText: string }) => {
  //               if (ele.TypeCodeText == "Customer Information") return true;
  //             }
  //           );
  //           // console.log(listPriceObj);
  //           let temp: SalesOrderItems = {
  //             id: ele.ItemProduct.ProductID,
  //             description: ele.Description,
  //             requestedQuantity: parseFloat(
  //               ele.ItemScheduleLine[0].Quantity
  //             ).toFixed(2),
  //             confirmedQuantity: parseFloat(
  //               ele.ItemScheduleLine[1].Quantity
  //             ).toFixed(2),
  //             unitOfMeasurmentCode: ele.ItemScheduleLine[0].unitCode,
  //             unitOfMeasurment: ele.ItemScheduleLine[0].unitCodeText,
  //             currency: ele.NetAmountCurrencyCodeText,
  //             listPrice: listPriceObj?.DecimalValue
  //               ? parseFloat(listPriceObj?.DecimalValue).toFixed(2)
  //               : "0",
  //             discountAmount: itemDiscountObj?.CalculatedAmount
  //               ? parseFloat(itemDiscountObj?.CalculatedAmount).toFixed(2)
  //               : "0",
  //             discountRate: itemDiscountObj?.DecimalValue
  //               ? parseFloat(itemDiscountObj?.DecimalValue).toFixed(2)
  //               : "0",
  //             netPrice: itemNetValueObj?.DecimalValue
  //               ? parseFloat(itemNetValueObj?.DecimalValue).toFixed(2)
  //               : "0",
  //             netValue: itemNetValueObj?.CalculatedAmount
  //               ? parseFloat(itemNetValueObj?.CalculatedAmount).toFixed(2)
  //               : "0",
  //             notes: itemNotesObj?.Text || "",
  //             reasonOfRejection: ele.CancellationReasonCodeText,
  //             // taxDetails: itemTaxObj
  //             taxDetails: {
  //               taxType: itemTaxObj[0]?.TypeCodeText || "VAT",
  //               taxRate: itemTaxObj[0]?.Percent
  //                 ? parseFloat(itemTaxObj[0]?.Percent).toFixed(2)
  //                 : "",
  //               taxAmount: itemTaxObj[0]?.Amount
  //                 ? parseFloat(itemTaxObj[0]?.Amount).toFixed(2)
  //                 : "",
  //             },
  //           };
  //           salesOrderItems.push(temp);
  //         });
  //         let attachmentObj = ele.AttachmentFolder;
  //         attachmentObj.forEach((ele: any) => {
  //           let temp: SalesOrderAttachment = {
  //             uuid: ele.UUID,
  //             title: ele.Title,
  //             doc: ele.Binary,
  //           };
  //           salesOrderAttachment.push(temp);
  //         });
  //         let notesObj = ele.Text.find((ele: { TypeCodeText: string }) => {
  //           if (ele.TypeCodeText == "Customer Information") return true;
  //         });
  //         let priceObj = ele.PriceAndTaxCalculation.PriceComponent.find(
  //           (ele: { TypeCodeText: string }) => {
  //             if (ele.TypeCodeText == "Overall Discount (%)") return true;
  //           }
  //         );

  //         let temp: SalesOrdersDetails = {
  //           id: ele.ID,
  //           status: ele.LifeCycleStatusCodeText,
  //           // discription: ele.Description,
  //           externalRefrence: ele.ExternalReference,
  //           requstedDate: ele.RequestedDate.substring(0, 10),
  //           notes: notesObj?.TextContent || "",
  //           grossTotal: parseFloat(ele.GrossAmount).toFixed(2),
  //           totalDiscountRate: priceObj?.DecimalValue
  //             ? parseFloat(priceObj?.DecimalValue).toFixed(2)
  //             : "0",
  //           totalDiscountAmount: priceObj?.CalculatedAmount
  //             ? parseFloat(priceObj?.CalculatedAmount).toFixed(2)
  //             : "0",
  //           totalTax: parseFloat(ele.TaxAmount).toFixed(2),
  //           netTotal: parseFloat(ele.NetAmount).toFixed(2),
  //           items: salesOrderItems,
  //           attachment: salesOrderAttachment,
  //           customer: {
  //             id: ele.BuyerParty.PartyID,
  //             name: ele.BuyerParty.BuyerPartyName[0].FormattedName,
  //             address:
  //               ele.BuyerParty.AddressSnapshot.AddressSnapshotFormattedAddress[0].FormattedPostalAddressDescription.replace(
  //                 /\//g,
  //                 ","
  //               ),
  //             phone: ele.BuyerParty.AddressSnapshot.FormattedNumberDescription1,
  //             email: ele.BuyerParty.AddressSnapshot.URI,
  //             currency: ele.NetAmountCurrencyCode,
  //             contact: {
  //               name: ele.BuyerParty.ContactAddressSnapshot.FormattedName || "",
  //               phone:
  //                 ele.BuyerParty.ContactAddressSnapshot
  //                   .FormattedNumberDescription || "",
  //               email: ele.BuyerParty.ContactAddressSnapshot.URI || "",
  //             },
  //           },
  //         };
  //         salesOrderDetails.push(temp);
  //       });
  //       res.status(200).json(salesOrderDetails);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }
  // getAllSalesOrder(req: any, res: any): void {
  //   const salesOrder: SalesOrder[] = [];
  //   const { customerID, hostName, userName, password } = req.query;

  //   var config = {
  //     method: "get",
  //     url: `https://${hostName}.sapbydesign.com/sap/byd/odata/cust/v1/rsalesorder/SalesOrderCollection?$format=json&$expand=BuyerParty/BuyerPartyName&$select=ID,LifeCycleStatusCodeText,BuyerParty,PostingDateTime,RequestedDate,ExternalReference,UUID,NetAmountCurrencyCode,NetAmount,GrossAmount&$filter=ReleaseStatusCodeText eq 'Released' and (ApprovalStatusCodeText eq 'Approved' or ApprovalStatusCodeText eq 'Approval not Necessary') and BuyerParty/PartyID eq '${customerID}'`,
  //     headers: {
  //       Authorization:
  //         "Basic " + Buffer.from(userName + ":" + password).toString("base64"),
  //     },
  //   };
  //   axios(config)
  //     .then(function (response) {
  //       let obj = response.data.d.results;
  //       // console.log(obj);
  //       obj.forEach((ele: any) => {
  //         // console.log(ele);
  //         let temp: SalesOrder = {
  //           id: ele.ID,
  //           status: ele.LifeCycleStatusCodeText,
  //           accountId: ele.BuyerParty.PartyID,
  //           accountName: ele.BuyerParty.BuyerPartyName[0].FormattedName,
  //           postingDate: formateDate(ele.PostingDateTime)
  //             .toISOString()
  //             .substring(0, 10),
  //           requestedDate: ele.RequestedDate.substring(0, 10),
  //           externalReference: ele.ExternalReference,
  //           totalNet: parseFloat(ele.NetAmount).toFixed(2),
  //           totalGross: parseFloat(ele.GrossAmount).toFixed(2),
  //           totalCurrency: ele.NetAmountCurrencyCode,
  //           uuid: ele.UUID,
  //         };
  //         salesOrder.push(temp);
  //       });
  //       res.status(200).json(salesOrder);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }
  // public static formatDateOnly = (date: Date) => {
  //   return date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
  // };
}

export { SalesOrderController };
