import React from "react";

const Promotion_price_Charts = () => {
  return (
    <div>
      <div className="card mb-4">
        <div className="card-header">
          <i className="fas fa-table mr-1" />
          สินค้าและสาขา ที่ทำโปรโมชั่น ส่วนลด
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellSpacing={0}
            >
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Name</th>
                  <th>Group</th>
                  <th>Partner</th>
                  <th>Branch</th>
                  <th>Selling price</th>
                  <th>Discount Price</th>
                  <th>Total Discount</th>
                  <th>Start Day</th>
                  <th>End Day</th>
                </tr>
              </thead>
              {/* <tfoot>
                <tr>
                  <th>No.</th>
                  <th>Name</th>
                  <th>Group</th>
                  <th>Partner</th>
                  <th>Branch</th>
                  <th>Selling price</th>
                  <th>Discount Price</th>
                  <th>Total Discount</th>
                  <th>Start Day</th>
                  <th>End Day</th>
                </tr>
              </tfoot> */}
              <tbody>
                <tr>
                  <td> 01 </td>
                  <td> กีวี </td>
                  <td> ผลไม้ </td>
                  <td> ศักดาผลไม้ </td>
                  <td> Branch 1 </td>
                  <td> 50 Bat</td>
                  <td> 45 Bat</td>
                  <td> -5 Bat</td>
                  <td> 1-12-20 </td>
                  <td> 31-12-20 </td>
                </tr>
                <tr>
                  <td> 02 </td>
                  <td> กีวี </td>
                  <td> ผลไม้ </td>
                  <td> ศักดาผลไม้ </td>
                  <td> Branch 2 </td>
                  <td> 50 Bat</td>
                  <td> 43 Bat</td>
                  <td> -7 Bat</td>
                  <td> 1-12-20 </td>
                  <td> 31-12-20 </td>
                </tr>
                <tr>
                  <td> 03 </td>
                  <td> กีวี </td>
                  <td> ผลไม้ </td>
                  <td> ศักดาผลไม้ </td>
                  <td> Branch 3 </td>
                  <td> 50 Bat</td>
                  <td> 40 Bat</td>
                  <td> -10 Bat</td>
                  <td> 1-12-20 </td>
                  <td> 31-12-20 </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotion_price_Charts;
