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
    <div className="space-y-10">
      <ModeToggle />
      <div className="flex justify-center mt-[80px]">
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
      </div>
      <TableCaption className="flex justify-center ">
        Đã học 10000000 thẻ trong 1 phút hôm nay
      </TableCaption>
      {/* thông tin thòi gian dùng flashy */}
      <div className="flex justify-center space-x-5">
        <div className="">Daily average: 100</div>
        <div className="">Daily learned: 100</div>
        <div className="">Daily Longest streak: 100</div>
        <div className="">Current streak: 100</div>
      </div>
    </div>
  );
}

export default Page;
