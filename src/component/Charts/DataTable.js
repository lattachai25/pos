import React from "react";

const DataTable = () => {
  return (
    <div>
      <div className="card mb-4">
        <div className="card-header">
          <i className="fas fa-table mr-1" />
          รายงานการรับสินค้า
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
                  <th>Quantity</th>
                  <th>Day</th>
                  <th>Time</th>
                </tr>
              </thead>
              {/* <tfoot>
                <tr>
                  <th>No.</th>
                  <th>Name</th>
                  <th>Group</th>
                  <th>Partner</th>
                  <th>Branch</th>
                  <th>Quantity</th>
                  <th>Day</th>
                  <th>Time</th>
                </tr>
              </tfoot> */}
              <tbody>
                <tr>
                  <td> 01 </td>
                  <td> กีวี </td>
                  <td> ผลไม้ </td>
                  <td> ศักดาผลไม้ </td>
                  <td> Branch 1 </td>
                  <td> 10 Pack</td>
                  <td> 05/12/20</td>
                  <td> 08:10 </td>
                </tr>
                <tr>
                  <td> 02 </td>
                  <td> แคนตาลูป </td>
                  <td> ผลไม้ </td>
                  <td> ศักดาผลไม้ </td>
                  <td> Branch 1 </td>
                  <td> 1 Pack</td>
                  <td> 05/12/20</td>
                  <td> 08:12 </td>
                </tr>
                <tr>
                  <td> 03 </td>
                  <td> สตรอเบอร์รี่ </td>
                  <td> ผลไม้ </td>
                  <td> ศักดาผลไม้ </td>
                  <td> Branch 1 </td>
                  <td> 20 Pack</td>
                  <td> 05/12/20</td>
                  <td> 08:25 </td>
                </tr>
                <tr>
                  <td> 04 </td>
                  <td> ส้มโชกุล </td>
                  <td> ผลไม้ </td>
                  <td> ศักดาผลไม้ </td>
                  <td> Branch 2 </td>
                  <td> 10 Pack</td>
                  <td> 05/12/20</td>
                  <td> 08:35 </td>
                </tr>
                <tr>
                  <td> 05 </td>
                  <td> แอปเปิลแดง </td>
                  <td> ผลไม้ </td>
                  <td> ศักดาผลไม้ </td>
                  <td> Branch 2 </td>
                  <td> 20 Pack</td>
                  <td> 05/12/20</td>
                  <td> 09:10 </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
