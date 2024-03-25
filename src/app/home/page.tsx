import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption,
} from "@/components/ui/table";

function Page() {
  return (
    <div className="grid grid-cols-10 mt-[40px] mx-[20%]">
      <div className="col-span-7 w-full ">
        <div className="w-fit h-fit border-gray-200 border-[1px] rounded-xl">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[300px]">Flash card</TableHead>
                <TableHead className="text-right">New</TableHead>
                <TableHead className="text-right">Repeat</TableHead>
                <TableHead className="text-right">Due</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">
                  Đây là một cái tên rất dài
                </TableCell>
                <TableCell className="text-right">100</TableCell>
                <TableCell className="text-right">100</TableCell>
                <TableCell className="text-right">200</TableCell>
              </TableRow>
            </TableBody>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">
                  Đây là một cái tên rất dài
                </TableCell>
                <TableCell className="text-right">100</TableCell>
                <TableCell className="text-right">100</TableCell>
                <TableCell className="text-right">200</TableCell>
              </TableRow>
            </TableBody>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">
                  Đây là một cái tên rất dài
                </TableCell>
                <TableCell className="text-right">100</TableCell>
                <TableCell className="text-right">100</TableCell>
                <TableCell className="text-right">200</TableCell>
              </TableRow>
            </TableBody>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">
                  Đây là một cái tên rất dài
                </TableCell>
                <TableCell className="text-right">100</TableCell>
                <TableCell className="text-right">100</TableCell>
                <TableCell className="text-right">200</TableCell>
              </TableRow>
            </TableBody>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">
                  Đây là một cái tên rất dài
                </TableCell>
                <TableCell className="text-right">100</TableCell>
                <TableCell className="text-right">100</TableCell>
                <TableCell className="text-right">200</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div className="">Đã học 10000000 thẻ trong 1 phút hôm nay</div>
      </div>

      {/* thông tin thòi gian dùng flashy */}
      <div className="col-span-3">
        <div className="">Daily average: 100</div>
        <div className="">Daily learned: 100</div>
        <div className="">Longest streak: 100</div>
        <div className="">Current streak: 100</div>
      </div>
    </div>
  );
}

export default Page;
