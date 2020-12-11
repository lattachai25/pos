import React from "react";

const Transform_products = () => {
  return (
    <div>
      <div className="card mb-4">
        <div className="card-header">
          <i className="fas fa-table mr-1" />
          สินค้าแปรรูป
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
                  <th>สาขา</th>
                  <th>ชื่อสินค้า</th>
                  <th>จำนวนแปรรูป</th>
                  <th>ราคาต้นทุน </th>
                  <th>จำนวนได้</th>
                  <th>ราคาขาย</th>
                  <th>จำนวนที่ขายไป</th>
                  <th>คงเหลือ</th>
                  <th>รายได้รวม</th>
                  <th>วันที่</th>
                </tr>
              </thead>
              {/* <tfoot>
                <tr>
                  <th>No.</th>
                  <th>สาขา</th>
                  <th>ชื่อสินค้า</th>
                  <th>จำนวนแปรรูป</th>
                  <th>ราคาต้นทุน </th>
                  <th>จำนวนได้</th>
                  <th>ราคาขาย</th>
                  <th>จำนวนที่ขายไป</th>
                  <th>รายได้รวม</th>
                  <th>วันที่</th>
                </tr>
              </tfoot> */}
              <tbody>
                <tr>
                  <td> 01 </td>
                  <td> สาขา 1 </td>
                  <td> แตงโม </td>
                  <td> 10 ลูก </td>
                  <td> 20 บาท / ลูก </td>
                  <td> 20 Pack </td>
                  <td> 50 บาท </td>
                  <td> 20 pack </td>
                  <td> 0 pack </td>
                  <td> 750 บาท </td>
                  <td> 12-12-20 </td>
                </tr>
                <tr>
                  <td> 02 </td>
                  <td> สาขา 1 </td>
                  <td> แอปเปิลแดง </td>
                  <td> 15 ลูก </td>
                  <td> 13 บาท / ลูก </td>
                  <td> 10 Pack </td>
                  <td> 30 บาท </td>
                  <td> 10 pack </td>
                  <td> 0 pack </td>
                  <td> 300 บาท </td>
                  <td> 12-12-20 </td>
                </tr>
                <tr>
                  <td> 03 </td>
                  <td> สาขา 1 </td>
                  <td> สับปะรด </td>
                  <td> 5 ลูก </td>
                  <td> 10 บาท / ลูก </td>
                  <td> 4 Pack </td>
                  <td> 30 บาท </td>
                  <td> 3 pack </td>
                  <td> 1 pack </td>
                  <td> 90 บาท </td>
                  <td> 12-12-20 </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transform_products;
