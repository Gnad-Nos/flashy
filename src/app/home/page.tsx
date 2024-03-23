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
import { ModeToggle } from "@/components/ui/mode-toggle";

function Page() {
  return (
    <div className="grid grid-cols-10 mt-[80px] mx-[20%] border-black border-2">
      <div className="col-span-7 w-full border-r-2 border-black">
        <div className="w-fit h-fit border-gray-200 border-[1px] rounded-xl">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[300px]">Bộ thẻ</TableHead>
                <TableHead className="text-right">Mới</TableHead>
                <TableHead className="text-right">Học</TableHead>
                <TableHead className="text-right">Đến hạn</TableHead>
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
        <ModeToggle />
        <div className="">Daily average: 100</div>
        <div className="">Daily learned: 100</div>
        <div className="">Longest streak: 100</div>
        <div className="">Current streak: 100</div>
      </div>
    </div>
  );
}

export default Page;
