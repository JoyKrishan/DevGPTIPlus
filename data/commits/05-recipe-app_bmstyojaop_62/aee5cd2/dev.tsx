import React, { FC } from "react"

import { PageDetailHeader } from "@/app/(app)/_component/header"

export const metadata = {
  title: "レシピ詳細",
}

const ChefPage: FC = () => {
  const recipeData = {
    favoriteCount: 222,
    img: "/pizza.jpg",
    introduction:
      "おいしいおいしいマルゲリータピザ。トマトたっぷり・チーズたっぷり！生地はさくさくもっちもち",
    name: "山田の特製マルゲリータ",
    user: "山田シェフ",
    userImg: "/chef.jpg",
  }

  return (
    <div>
      <PageDetailHeader data={recipeData} pageType="recipe" />
    </div>
  )
}

export default ChefPage