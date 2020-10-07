// reduce
var res_json = data.reduce((pv, cv)=>{
    if (pv[cv.id]) {
		pv[cv.id]['options'][cv.opt_index] = cv.option
	}
	else{
        pv[cv.id] = {'question':cv.questions}
		pv[cv.id]['options'] = {}
		pv[cv.id]['options'][cv.opt_index] = cv.option
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

