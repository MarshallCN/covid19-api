var data = [{"id":2,"questions":"Do you need to keep social distance when you wear a face mask?","option":"Yes","opt_index":"a","correct":true},{"id":2,"questions":"Do you need to keep social distance when you wear a face mask?","option":"No","opt_index":"b","correct":false},{"id":1,"questions":"How far do you need to stand from someone in the UK?","option":"1m","opt_index":"a","correct":false},{"id":1,"questions":"How far do you need to stand from someone in the UK?","option":"1.5m","opt_index":"b","correct":true},{"id":1,"questions":"How far do you need to stand from someone in the UK?","option":"2m","opt_index":"c","correct":false},{"id":1,"questions":"How far do you need to stand from someone in the UK?","option":"3m","opt_index":"d","correct":false}]

// reduce
var res_json = data.reduce((pv, cv)=>{
    if (pv[cv.id]) {
		pv[cv.id]['options'][cv.opt_index] = cv.option
	}
	else{
        pv[cv.id] = {'question':cv.questions}
		pv[cv.id]['options'] = {}
		pv[cv.id]['options'][cv.opt_index] = cv.option
		pv[cv.id]['type'] = cv.typeid
    }
	if (cv.correct){
		pv[cv.id]['ca'] = cv.opt_index
	}
    return pv;
}, {});
res_json

// for loop
res = {}
for(let k in data){
	row = data[k]
	if (res[row.id]){
		
	}else{
		res[row.id] = {}
		res[row.id]['ask'] = row.questions
		res[row.id]['options'] = {}
		res[row.id]['options'][row.opt_index] = row.option
	}
}
res

