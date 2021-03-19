const mongoose = require("mongoose")
const schema = mongoose.Schema({
    'camera':String,

'currentLoad':{ 
	'avgLoad': Number,
        'currentLoad': Number,
        'currentLoadUser': Number,
        'currentLoadSystem': Number
	},
    'cpus': {
    	'type': Map,
    	'of': String
  	},
'mem':
      { 'total': Number,
        'free': Number,
        'used': Number,
        'available': Number
 	},
'cpuTemperature':
      { 'main': Number
	}
  })

  module.exports = mongoose.model("PerfMon", schema)



  