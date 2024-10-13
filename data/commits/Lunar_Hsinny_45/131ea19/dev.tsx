import { Button, List, Skeleton } from "antd";
import AvatarCustom from "@/components/AvatarCustom";
            avatar={
              <AvatarCustom
                username={member.userId.name}
                imgUrl={member.userId.avatar}
              />
            }