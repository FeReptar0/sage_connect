const _0x3a5975=_0x7948;(function(_0x842a64,_0x4947e0){const _0xb90d82=_0x7948,_0x463f91=_0x842a64();while(!![]){try{const _0x15225f=parseInt(_0xb90d82(0xb4))/0x1*(parseInt(_0xb90d82(0xb2))/0x2)+-parseInt(_0xb90d82(0xbd))/0x3+-parseInt(_0xb90d82(0xe4))/0x4+parseInt(_0xb90d82(0xbb))/0x5+-parseInt(_0xb90d82(0xf2))/0x6*(-parseInt(_0xb90d82(0xe7))/0x7)+-parseInt(_0xb90d82(0xde))/0x8*(parseInt(_0xb90d82(0xc7))/0x9)+parseInt(_0xb90d82(0xd5))/0xa;if(_0x15225f===_0x4947e0)break;else _0x463f91['push'](_0x463f91['shift']());}catch(_0x37d3fe){_0x463f91['push'](_0x463f91['shift']());}}}(_0x134d,0x59b28));function _0x134d(){const _0x2655d0=['Error\x20executing\x20query:\x20\x0a','-01&documentTypes=CFDI&offset=0&pageSize=0&cfdiType=CREDIT_NOTE','1106YYcGpU','receptor','No\x20hay\x20CFDI\x20de\x20tipo\x20I','getMonth','Error\x20al\x20enviar\x20notificacion:\x20','node-notifier','No\x20hay\x20CFDI\x20de\x20tipo\x20E','API_SECRET','items','uuid','rfc','14844hWXYtZ','.env.credentials.focaltec','UUID\x20','-01&documentTypes=CFDI&offset=0&pageSize=0&cfdiType=PAYMENT_CFDI','\x20eliminado\x20por\x20falta\x20de\x20RFCReceptor\x20en\x20fesa','28738CKGgYz','NREG','11zZtVTN','get','config','length','timbre','Error\x20al\x20obtener\x20el\x20tipo\x20de\x20comprobante\x20\x22E\x22\x20:\x20\x0a','SELECT\x20COUNT(*)\x20AS\x20NREG\x20FROM\x20APIBH\x20H,\x20APIBHO\x20O\x20WHERE\x20H.CNTBTCH\x20=\x20O.CNTBTCH\x20AND\x20H.CNTITEM\x20=\x20O.CNTITEM\x20AND\x20H.ERRENTRY\x20=\x200\x20AND\x20O.OPTFIELD\x20=\x20\x27FOLIOCFD\x27\x20AND\x20[VALUE]\x20=\x20\x27','1181680OmTlWV','payments','1663101IwzKuW','Error\x20executing\x20query:\x20','No\x20hay\x20CFDI\x20de\x20tipo\x20P','info','env','split','metadata','/api/1.0/extern/tenants/','cfdi','dotenv','9xWwIkq','SELECT\x20COUNT(*)\x20AS\x20NREG\x20FROM\x20fesaParam\x20WHERE\x20Parametro\x20=\x20\x27RFCReceptor\x27\x20AND\x20VALOR\x20=\x20\x27','/cfdis?createdUntil=','log','GetTypesCFDI','setMonth','total','cwd','slice','URL','exports','-01&documentTypes=CFDI&offset=0&pageSize=0&cfdiType=INVOICE&stage=PENDING_TO_PAY','push','notify','9551440XqGjFo','toISOString','&createdFrom=','Focaltec','recordset','/public/img/cerrar.png','./SQLServerConnection','error','\x20conservado','724520OOflQI','Error\x20al\x20obtener\x20el\x20tipo\x20de\x20comprobante\x20\x22I\x22\x20:\x20\x0a','payment_info','\x20eliminado\x20por\x20ser\x20ya\x20timbrado','./LogGenerator','data','2912396greSZn'];_0x134d=function(){return _0x2655d0;};return _0x134d();}const notifier=require(_0x3a5975(0xec));require(_0x3a5975(0xc6))[_0x3a5975(0xb6)]({'path':_0x3a5975(0xf3)});const axios=require('axios'),{runQuery}=require(_0x3a5975(0xdb)),{logGenerator}=require(_0x3a5975(0xe2)),url=process[_0x3a5975(0xc1)][_0x3a5975(0xd0)],tenantIds=[],apiKeys=[],apiSecrets=[],databases=[],tenantIdValues=process[_0x3a5975(0xc1)]['TENANT_ID']['split'](','),apiKeyValues=process[_0x3a5975(0xc1)]['API_KEY']['split'](','),apiSecretValues=process[_0x3a5975(0xc1)][_0x3a5975(0xee)][_0x3a5975(0xc2)](','),databaseValues=process['env']['DATABASES'][_0x3a5975(0xc2)](',');tenantIds[_0x3a5975(0xd3)](...tenantIdValues),apiKeys['push'](...apiKeyValues),apiSecrets[_0x3a5975(0xd3)](...apiSecretValues),databases[_0x3a5975(0xd3)](...databaseValues);async function getTypeP(_0x5706b1){const _0x59e012=_0x3a5975;let _0x4b9871=new Date(),_0x27e62f=new Date(_0x4b9871[_0x59e012(0xcc)](_0x4b9871['getMonth']()-0x1))[_0x59e012(0xd6)]()[_0x59e012(0xcf)](0x0,0x7),_0x3ebb24=new Date()[_0x59e012(0xd6)]()[_0x59e012(0xcf)](0x0,0xa);try{const _0x299fdf=await axios['get'](url+_0x59e012(0xc4)+tenantIds[_0x5706b1]+_0x59e012(0xc9)+_0x3ebb24+_0x59e012(0xd7)+_0x27e62f+_0x59e012(0xf5),{'headers':{'PDPTenantKey':apiKeys[_0x5706b1],'PDPTenantSecret':apiSecrets[_0x5706b1]}});if(_0x299fdf['data'][_0x59e012(0xcd)]===0x0)return console[_0x59e012(0xca)](_0x59e012(0xbf)),[];const _0x4b322e=[];for(const _0xf6139 of _0x299fdf[_0x59e012(0xe3)]['items']){console[_0x59e012(0xca)](_0xf6139[_0x59e012(0xc3)][_0x59e012(0xe0)][_0x59e012(0xbc)][_0x59e012(0xb7)]);if(_0xf6139['metadata'][_0x59e012(0xe0)]['payments'][_0x59e012(0xb7)]===0x0){console[_0x59e012(0xca)](_0x59e012(0xf4)+_0xf6139['cfdi'][_0x59e012(0xb8)][_0x59e012(0xf0)]+'\x20eliminado\x20por\x20no\x20tener\x20pagos'),logGenerator('GetTypesCFDI','info',_0x59e012(0xf4)+_0xf6139[_0x59e012(0xc5)][_0x59e012(0xb8)]['uuid']+'\x20eliminado\x20por\x20no\x20tener\x20pagos');continue;}const _0x2e8827=_0x59e012(0xc8)+_0xf6139[_0x59e012(0xc5)]['receptor'][_0x59e012(0xf1)]+'\x27;';try{const _0x5e38d1=await runQuery(_0x2e8827);if(_0x5e38d1[_0x59e012(0xd9)][0x0][_0x59e012(0xb3)]===0x0){console[_0x59e012(0xca)](_0x59e012(0xf4)+_0xf6139[_0x59e012(0xc5)]['timbre']['uuid']+'\x20eliminado\x20por\x20falta\x20de\x20RFCReceptor\x20en\x20fesa'),logGenerator('GetTypesCFDI',_0x59e012(0xc0),'UUID\x20'+_0xf6139['cfdi'][_0x59e012(0xb8)]['uuid']+_0x59e012(0xf6));continue;}const _0x2ee3d5=_0x59e012(0xba)+_0xf6139[_0x59e012(0xc5)][_0x59e012(0xb8)][_0x59e012(0xf0)]+'\x27;',_0x4460d0=await runQuery(_0x2ee3d5,databases[_0x5706b1]);if(_0x4460d0[_0x59e012(0xd9)][0x0]['NREG']>0x0){console['log']('UUID\x20'+_0xf6139[_0x59e012(0xc5)][_0x59e012(0xb8)]['uuid']+_0x59e012(0xe1));continue;}console['log'](_0x59e012(0xf4)+_0xf6139[_0x59e012(0xc5)][_0x59e012(0xb8)][_0x59e012(0xf0)]+_0x59e012(0xdd)),_0x4b322e[_0x59e012(0xd3)](_0xf6139);}catch(_0x5ac4d0){console[_0x59e012(0xca)](_0x59e012(0xbe)+_0x5ac4d0),logGenerator(_0x59e012(0xcb),_0x59e012(0xdc),_0x59e012(0xe5)+_0x5ac4d0+'\x0a');}}return _0x4b322e;}catch(_0x360d8f){try{logGenerator(_0x59e012(0xcb),_0x59e012(0xdc),'Error\x20al\x20obtener\x20el\x20tipo\x20de\x20comprobante\x20\x22P\x22\x20:\x20\x0a'+_0x360d8f+'\x0a'),notifier['notify']({'title':'Focaltec','message':'Error\x20al\x20obtener\x20el\x20tipo\x20de\x20comprobante\x20\x22P\x22\x20:\x20\x0a'+_0x360d8f+'\x0a','sound':!![],'wait':!![],'icon':process[_0x59e012(0xce)]()+'/public/img/cerrar.png'});}catch(_0x5899b7){console['log'](_0x59e012(0xeb)+_0x5899b7),console[_0x59e012(0xca)]('Error\x20al\x20obtener\x20el\x20tipo\x20de\x20comprobante\x20\x22P\x22\x20:\x20\x0a'+_0x360d8f+'\x0a');}return[];}}function _0x7948(_0x50cf23,_0x57bef6){const _0x134d68=_0x134d();return _0x7948=function(_0x79480c,_0x3ffa05){_0x79480c=_0x79480c-0xb2;let _0x54f3a1=_0x134d68[_0x79480c];return _0x54f3a1;},_0x7948(_0x50cf23,_0x57bef6);}async function getTypeI(_0x8453cf){const _0x3444ba=_0x3a5975;let _0x1f7f09=new Date(),_0x3562fa=new Date(_0x1f7f09[_0x3444ba(0xcc)](_0x1f7f09[_0x3444ba(0xea)]()-0x1))[_0x3444ba(0xd6)]()['slice'](0x0,0x7),_0x55af05=new Date()['toISOString']()[_0x3444ba(0xcf)](0x0,0xa);try{const _0x3b001a=await axios[_0x3444ba(0xb5)](url+_0x3444ba(0xc4)+tenantIds[_0x8453cf]+'/cfdis?createdUntil='+_0x55af05+'&createdFrom='+_0x3562fa+_0x3444ba(0xd2),{'headers':{'PDPTenantKey':apiKeys[_0x8453cf],'PDPTenantSecret':apiSecrets[_0x8453cf]}});if(_0x3b001a[_0x3444ba(0xe3)][_0x3444ba(0xcd)]===0x0)return console['log'](_0x3444ba(0xe9)),[];const _0x4a1786=[];for(const _0x429454 of _0x3b001a['data'][_0x3444ba(0xef)]){const _0x5b3d9e=_0x3444ba(0xc8)+_0x429454[_0x3444ba(0xc5)][_0x3444ba(0xe8)][_0x3444ba(0xf1)]+'\x27;';try{const _0x4fded8=await runQuery(_0x5b3d9e);if(_0x4fded8[_0x3444ba(0xd9)][0x0][_0x3444ba(0xb3)]===0x0){console[_0x3444ba(0xca)](_0x3444ba(0xf4)+_0x429454[_0x3444ba(0xc5)]['timbre'][_0x3444ba(0xf0)]+'\x20eliminado\x20por\x20falta\x20de\x20RFCReceptor\x20en\x20fesa'),logGenerator(_0x3444ba(0xcb),_0x3444ba(0xc0),_0x3444ba(0xf4)+_0x429454[_0x3444ba(0xc5)][_0x3444ba(0xb8)][_0x3444ba(0xf0)]+_0x3444ba(0xf6));continue;}const _0x4fbd9f=_0x3444ba(0xba)+_0x429454[_0x3444ba(0xc5)]['timbre'][_0x3444ba(0xf0)]+'\x27;',_0x3ce09f=await runQuery(_0x4fbd9f,databases[_0x8453cf]);if(_0x3ce09f[_0x3444ba(0xd9)][0x0][_0x3444ba(0xb3)]>0x0){console['log'](_0x3444ba(0xf4)+_0x429454[_0x3444ba(0xc5)]['timbre']['uuid']+'\x20eliminado\x20por\x20ser\x20ya\x20timbrado');continue;}console[_0x3444ba(0xca)](_0x3444ba(0xf4)+_0x429454[_0x3444ba(0xc5)][_0x3444ba(0xb8)][_0x3444ba(0xf0)]+_0x3444ba(0xdd)),_0x4a1786[_0x3444ba(0xd3)](_0x429454);}catch(_0x22abad){console[_0x3444ba(0xca)]('Error\x20executing\x20query:\x20'+_0x22abad),logGenerator('GetTypesCFDI',_0x3444ba(0xdc),_0x3444ba(0xe5)+_0x22abad+'\x0a');}}return _0x4a1786;}catch(_0x90e493){try{logGenerator('GetTypesCFDI','error',_0x3444ba(0xdf)+_0x90e493+'\x0a'),notifier[_0x3444ba(0xd4)]({'title':_0x3444ba(0xd8),'message':_0x3444ba(0xdf)+_0x90e493+'\x0a','sound':!![],'wait':!![],'icon':process[_0x3444ba(0xce)]()+_0x3444ba(0xda)});}catch(_0x1fd0f2){console[_0x3444ba(0xca)](_0x3444ba(0xeb)+_0x1fd0f2),console['log'](_0x3444ba(0xdf)+_0x90e493+'\x0a');}return[];}}async function getTypeE(_0x44fb67){const _0x5eca79=_0x3a5975;let _0x4dcdc6=new Date(),_0x11ef8b=new Date(_0x4dcdc6[_0x5eca79(0xcc)](_0x4dcdc6[_0x5eca79(0xea)]()-0x1))[_0x5eca79(0xd6)]()[_0x5eca79(0xcf)](0x0,0x7),_0x499a3c=new Date()[_0x5eca79(0xd6)]()['slice'](0x0,0xa);try{const _0x48adc4=await axios[_0x5eca79(0xb5)](url+'/api/1.0/extern/tenants/'+tenantIds[_0x44fb67]+'/cfdis?createdUntil='+_0x499a3c+_0x5eca79(0xd7)+_0x11ef8b+_0x5eca79(0xe6),{'headers':{'PDPTenantKey':apiKeys[_0x44fb67],'PDPTenantSecret':apiSecrets[_0x44fb67]}});if(_0x48adc4[_0x5eca79(0xe3)][_0x5eca79(0xcd)]===0x0)return console['log'](_0x5eca79(0xed)),[];const _0x45a330=[];for(const _0x641d33 of _0x48adc4[_0x5eca79(0xe3)]['items']){const _0x15643b=_0x5eca79(0xc8)+_0x641d33[_0x5eca79(0xc5)]['receptor'][_0x5eca79(0xf1)]+'\x27;';try{const _0x58f275=await runQuery(_0x15643b);if(_0x58f275[_0x5eca79(0xd9)][0x0]['NREG']===0x0){console['log']('UUID\x20'+_0x641d33[_0x5eca79(0xc5)][_0x5eca79(0xb8)]['uuid']+_0x5eca79(0xf6)),logGenerator(_0x5eca79(0xcb),_0x5eca79(0xc0),_0x5eca79(0xf4)+_0x641d33[_0x5eca79(0xc5)][_0x5eca79(0xb8)][_0x5eca79(0xf0)]+'\x20eliminado\x20por\x20falta\x20de\x20RFCReceptor\x20en\x20fesa');continue;}const _0x156e79=_0x5eca79(0xba)+_0x641d33[_0x5eca79(0xc5)][_0x5eca79(0xb8)][_0x5eca79(0xf0)]+'\x27;',_0x301ed3=await runQuery(_0x156e79,databases[_0x44fb67]);if(_0x301ed3['recordset'][0x0]['NREG']>0x0){console[_0x5eca79(0xca)](_0x5eca79(0xf4)+_0x641d33[_0x5eca79(0xc5)][_0x5eca79(0xb8)][_0x5eca79(0xf0)]+_0x5eca79(0xe1));continue;}console[_0x5eca79(0xca)](_0x5eca79(0xf4)+_0x641d33[_0x5eca79(0xc5)][_0x5eca79(0xb8)][_0x5eca79(0xf0)]+_0x5eca79(0xdd)),_0x45a330[_0x5eca79(0xd3)](_0x641d33);}catch(_0x26805c){console['log'](_0x5eca79(0xbe)+_0x26805c),logGenerator(_0x5eca79(0xcb),_0x5eca79(0xdc),'Error\x20executing\x20query:\x20\x0a'+_0x26805c+'\x0a');}}return _0x45a330;}catch(_0x42d23e){try{logGenerator(_0x5eca79(0xcb),_0x5eca79(0xdc),'Error\x20al\x20obtener\x20el\x20tipo\x20de\x20comprobante\x20\x22E\x22\x20:\x20\x0a'+_0x42d23e+'\x0a'),notifier[_0x5eca79(0xd4)]({'title':_0x5eca79(0xd8),'message':_0x5eca79(0xb9)+_0x42d23e+'\x0a','sound':!![],'wait':!![],'icon':process[_0x5eca79(0xce)]()+_0x5eca79(0xda)});}catch(_0x1b7937){console[_0x5eca79(0xca)](_0x5eca79(0xeb)+_0x1b7937),console[_0x5eca79(0xca)]('Error\x20al\x20obtener\x20el\x20tipo\x20de\x20comprobante\x20\x22E\x22\x20:\x20\x0a'+_0x42d23e+'\x0a');}return[];}}module[_0x3a5975(0xd1)]={'getTypeP':getTypeP,'getTypeI':getTypeI,'getTypeE':getTypeE};
