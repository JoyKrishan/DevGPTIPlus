"use client"

import React, { FC } from "react"

import { AiOutlineLink } from "react-icons/ai"
import { BsInstagram, BsTwitter } from "react-icons/bs"

type LinkCardProps = {
  accountId?: string
  linkType: "twitter" | "instagram" | "others"
  siteName?: string
  snsFollower?: number
  url: string
}

/** @package */
export const LinkCard: FC<LinkCardProps> = (props) => {
  const { accountId, linkType, siteName, snsFollower, url } = props

  return (
    <a href={url} className="flex gap-4 p-4">
      <SnsIcon linkType={linkType} />
      <SiteInfo
        accountId={accountId}
        linkType={linkType}
        snsFollwer={snsFollower}
        siteName={siteName}
        url={url}
      />
    </a>
  )
}

const SnsIcon: FC<{ linkType: LinkCardProps["linkType"] }> = (props) => {
  const { linkType } = props
  switch (linkType) {
    case "twitter":
      return (
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-7 p-3 text-gray-1">
          <BsTwitter className="h-full w-full" />
        </div>
      )
    case "instagram":
      return (
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-instagram p-3 text-gray-1">
          <BsInstagram className="h-full w-full" />
        </div>
      )
    case "others":
      return (
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-mauve-9 p-3 text-gray-1">
          <AiOutlineLink className="h-full w-full" />
        </div>
      )
  }
}

const SiteInfo: FC<{
  accountId?: LinkCardProps["accountId"]
  linkType: LinkCardProps["linkType"]
  siteName?: LinkCardProps["siteName"]
  snsFollwer?: LinkCardProps["snsFollower"]
  url?: LinkCardProps["url"]
}> = (props) => {
  const { accountId, linkType, siteName, snsFollwer, url } = props

  const convertTitle = (
    linkType: LinkCardProps["linkType"],
    siteName?: LinkCardProps["siteName"],
  ) => {
    switch (linkType) {
      case "twitter":
        return "Twitter"
      case "instagram":
        return "Instagram"
      default:
        return siteName ?? ""
    }
  }

  const isSns = linkType === "twitter" || linkType === "instagram"
  const title = convertTitle(linkType, siteName)

  return (
    <div>
      <p className="site-name">{title}</p>
      <div className="text-sm text-mauve-11">
        <p>
          {isSns ? (
            <>
              {snsFollwer}フォロワー<span>・</span>
              {accountId}
            </>
          ) : (
            url
          )}
        </p>
      </div>
    </div>
  )
}