import { LinkCard } from "../_component"

    type DummydataType = {
      accountId?: string
      linkType: "twitter" | "instagram" | "others"
      siteName?: string
      snsFollower?: number
      url: string
    }

    const website: DummydataType = {
      accountId: undefined,
      linkType: "others",
      siteName: "",
      snsFollower: undefined,
      url: "",
    }
    if (i === 0) {
      website.url = "https://about.twitter.com/ja"
      website.linkType = "twitter"
      website.accountId = "@hogehogeman"
      website.snsFollower = 123
    } else if (i === 1) {
      website.url = "https://www.instagram.com/"
      website.linkType = "instagram"
      website.accountId = "@fugramaer"
      website.snsFollower = 300
    } else {
      website.siteName = "ほげふーふーがどっとこむ"
      website.url = "#"
      website.linkType = "others"
    }
      <LinkCard
        key={i}
        siteName={website.siteName}
        url={website.url}
        linkType={website.linkType}
        snsFollower={website.snsFollower}
        accountId={website.accountId}
      />