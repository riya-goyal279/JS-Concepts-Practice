const STATE = {
    PENDING: "PENDING",
    SUCCESS: "SUCCESS",
    REJECTED: "FAILED"
};

class MyPromise{

    constructor(executionFunc) {
        //initiate variables
        this.val = null;
        this.state = STATE.PENDING;
        this.successCallbacks = [];
        this.failedCallbacks = [];

        try{
            //callback
            executionFunc(
                val => this.resolve(val),
                val => this.reject(val)
            )
        } catch(error) {
            //call reject
            this.reject(error)
        }
    }

    resolve(val) {
        //update variables
        this.val = val;
        this.state == STATE.SUCCESS;
        this.successCallbacks.forEach(cb => cb());
    }

    reject(val) {
        //update variables
        this.val = val;
        this.state == STATE.REJECTED;
        this.failedCallbacks.forEach(cb => cb());
    }

    then(onResolve, onReject) {
        return new MyPromise((resolve, reject) => {

            const successCaller = () => {
                if(!onResolve) return resolve(this.val);

                try {
                    let val = onResolve(this.val);
                    resolve(val);
                } catch(error) {
                    reject(error);
                }
            }

            const failedCaller = () => {
                if(!onReject) return reject(this.val);

                try {
                    let val = onReject(this.val);
                    resolve(val);
                } catch(error) {
                    reject(error);
                }
            }

            switch(this.state) {
                case STATE.PENDING:
                    this.successCallbacks.push(successCaller);
                    this.failedCallbacks.push(failedCaller);
                    break;
                case STATE.SUCCESS:
                    successCaller();
                    break;
                case STATE.REJECTED:
                    failedCaller();
                    break;
                default: 
                    throw new Error("State not defined");
            }
        });
    }

    catch(onReject) {
        return this.then(null, onReject);
    }
}

function promiseA(a) {
    return new MyPromise((resolve, reject) => {

        setTimeout(() => {
            if(a == 1)
                return reject("a cannot be equal to 1");

            resolve(a + a);
        }, 1000);
        
    })
}

promiseA(2)
    .then((res) => console.log(res))
    .catch((error) => console.error(error))

promiseA(1)
    .then((res) => console.log(res))
    .catch((error) => console.error(error))