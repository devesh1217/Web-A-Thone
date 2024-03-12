let link = "http://192.168.213.224:8080/"
let totalOrder;


axios.get(link + "api/order/get/pending")
    .then(data => {
        const ordersContainer = document.getElementById('orderIdBoxid1');
        let c = 1;
        totalOrder = data.data.length;
        if( data.data.length==0){
            ordersContainer.innerHTML="No Pending Orders"
        } else {
            data.data.forEach(order => {
                const subBoxList = document.createElement('div');
                subBoxList.classList.add('sub-box-list1');
                subBoxList.setAttribute("id", `subBoxList${c}`)
                subBoxList.innerHTML += `
          <div class="TableDetail" id"tableIdDetail">
          Table No. ${order.tableNo}
          </div>
          <div class="customerDetail">
          Name : ${order.userName}<br>
          Mobile No. : ${order.userId}
          </div>
           <div class="main-box-list">
          <div class="main-box-list-text">
              Item
          </div>
          <div class="main-box-list-que">
              Quantity
          </div>
          <div class="main-box-list-price">
              Price
          </div>
          <div class="main-box-list-total">
              Total
          </div>
      </div>`;
                let totalBill = 0;
                for (let i = 0; i < order.items.length; i++) {
                    subBoxList.innerHTML += `<div class="sub-box-list">
                <div class="sub-box-list-text" id="sub-box-list-text">
                    ${order.items[i].itemName}
                </div>
                <div class="sub-box-list-que">
                    ${order.items[i].quantity}
                </div>
                <div class="sub-box-list-price">
                    ${order.items[i].price.toFixed(2)}
                </div>
                <div class="sub-box-list-total">
                ${(order.items[i].quantity * order.items[i].price).toFixed(2)}
                </div>
            </div>`
                    totalBill += order.items[i].price;
                }
                subBoxList.innerHTML += `
          <div class="totalBill">${totalBill.toFixed(2)}</div>
          <div class="statusButton">
                <button class="learn-more AccpectBtn" id=${order._id} >
                    Accept
                </button>
            </div`
    
    
                // Append subBoxList to ordersContainer
                ordersContainer.appendChild(subBoxList);
    
                document.querySelectorAll('.AccpectBtn').forEach((curr) => {
                    curr.addEventListener('click', (e) => {
                        axios.get(link + "api/order/set/taken/" + e.target.id)
                            .then((doc) => {
                                location.reload();
                            }).catch(error => {
                                console.log("error");
                            })
                    })
    
                });
            })
        }
    })
        

        axios.get(link + "api/order/get/taken")
            .then(data => {
                const ordersContainer = document.getElementById('orderIdBoxid2');
                let c = 1;
                totalOrder = data.data.length;
                if(data.data.length==0){
                    ordersContainer.innerHTML="No Order is being prepared"
                } else {
                    data.data.forEach(order => {
                        const subBoxList = document.createElement('div');
                        subBoxList.classList.add('sub-box-list1');
                        subBoxList.setAttribute("id", `subBoxList${c}`)
                        subBoxList.innerHTML += `
          <div class="TableDetail" id"tableIdDetail">
          Table No. ${order.tableNo}
          </div>
          <div class="customerDetail">
          Name : ${order.userName}<br>
          Mobile No. : ${order.userId}<br>
          Date : ${new Date(order.date).toLocaleString()}
          </div>
           <div class="main-box-list">
          <div class="main-box-list-text">
              Item
          </div>
          <div class="main-box-list-que">
              Quantity
          </div>
          <div class="main-box-list-price">
              Price
          </div>
          <div class="main-box-list-total">
              Total
          </div>
      </div>`;
                        let totalBill = 0;
                        for (let i = 0; i < order.items.length; i++) {
                            subBoxList.innerHTML += `<div class="sub-box-list">
                <div class="sub-box-list-text" id="sub-box-list-text">
                    ${order.items[i].itemName}
                </div>
                <div class="sub-box-list-que">
                    ${order.items[i].quantity}
                </div>
                <div class="sub-box-list-price">
                    ${order.items[i].price.toFixed(2)}
                </div>
                <div class="sub-box-list-total">
                ${(order.items[i].quantity * order.items[i].price).toFixed(2)}
                </div>
            </div>`
                            totalBill += order.items[i].price;
                        }
                        subBoxList.innerHTML += `
          <div class="totalBill">${totalBill.toFixed(2)}</div>
          <div class="statusButton">
            <button class="learn-more PreparedBtn" id=${order._id} >
                Prepared
            </button>
            </div`
    
    
                        // Append subBoxList to ordersContainer
                        ordersContainer.appendChild(subBoxList);
    
                        document.querySelectorAll('.PreparedBtn').forEach((curr) => {
                            curr.addEventListener('click', (e) => {
                                axios.get(link + "api/order/set/ready/" + e.target.id)
                                    .then((doc) => {
                                        location.reload();
                                    }).catch(error => {
                                        console.log("error");
                                    })
                            })
            
                        });
    
                    });
                }
                
            })

        axios.get(link + "api/order/get/ready")
            .then(data => {
                const ordersContainer = document.getElementById('orderIdBoxid3');
                let c = 1;
                totalOrder = data.data.length;

                if(data.data.length==0){
                    ordersContainer.innerHTML="No Read Orders"
                } else {
                    data.data.forEach(order => {
                        const subBoxList = document.createElement('div');
                        subBoxList.classList.add('sub-box-list1');
                        subBoxList.setAttribute("id", `subBoxList${c}`)
                        subBoxList.innerHTML += `
          <div class="TableDetail" id"tableIdDetail">
          Table No. ${order.tableNo}
          </div>
          <div class="customerDetail">
          Name : ${order.userName}<br>
          Mobile No. : ${order.userId}
          </div>
           <div class="main-box-list">
          <div class="main-box-list-text">
              Item
          </div>
          <div class="main-box-list-que">
              Quantity
          </div>
          <div class="main-box-list-price">
              Price
          </div>
          <div class="main-box-list-total">
              Total
          </div>
      </div>`;
                        let totalBill = 0;
                        for (let i = 0; i < order.items.length; i++) {
                            subBoxList.innerHTML += `<div class="sub-box-list">
                <div class="sub-box-list-text" id="sub-box-list-text">
                    ${order.items[i].itemName}
                </div>
                <div class="sub-box-list-que">
                    ${order.items[i].quantity}
                </div>
                <div class="sub-box-list-price">
                    ${order.items[i].price.toFixed(2)}
                </div>
                <div class="sub-box-list-total">
                ${(order.items[i].quantity * order.items[i].price).toFixed(2)}
                </div>
            </div>`
                            totalBill += order.items[i].price;
                        }
                        subBoxList.innerHTML += `
          <div class="totalBill">${totalBill.toFixed(2)}</div>
          <div class="statusButton">
                <button class="learn-more DeliveredBtn" id="${order._id}">
                Delivered
                </button>
            </div`
    
    
                        // Append subBoxList to ordersContainer
                        ordersContainer.appendChild(subBoxList);
    
                        document.querySelectorAll('.DeliveredBtn').forEach((curr) => {
                            curr.addEventListener('click', (e) => {
                                axios.get(link + "api/order/set/prev/" + e.target.id)
                                    .then((doc) => {
                                        location.reload();
                                    }).catch(error => {
                                        console.log("error");
                                    })
                            })
            
                        });
    
    
                    });
                }
            })