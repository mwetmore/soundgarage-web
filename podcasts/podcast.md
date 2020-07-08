---
permalink: /podcasts/feed.xml
eleventyExcludeFromCollections: true
layout: feeds.liquid
---
<?xml version="1.0" encoding="utf-8"?>
<rss xmlns:atom="http://www.w3.org/2005/Atom" xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd" xmlns:content="http://purl.org/rss/1.0/modules/content/" version="2.0">
<channel>
<link>https://www.soundgarage.io</link>
<language>en-us</language>
<copyright>&#xA9;2020</copyright>
<webMaster>soundgarageio+podcast@gmail.com (Sound Garage)</webMaster>
<managingEditor>soundgarageio+podcast@gmail.com (Sound Garage)</managingEditor>
<image>
<url>https://www.soundgarage.io/img/soundgarageio_logo_final.jpg</url>
<title>SoundGarage 2020 Logo</title>
<link>https://www.soundgarage.io</link>
</image>
<itunes:owner>
<itunes:name>SoundGarage</itunes:name>
<itunes:email>soundgarageio+podcast@gmail.com</itunes:email>
</itunes:owner>
<itunes:category text="Music">
<itunes:category text="Music Commentary" />
</itunes:category>
<itunes:keywords>music, records, collecting, audio</itunes:keywords>
<itunes:explicit>no</itunes:explicit>
<itunes:image href="https://www.soundgarage.io/img/soundgarageio_logo_final.jpg" />
<atom:link href="http://www.soundgarage.io/podcasts/feed.xml" rel="self" type="application/rss+xml" />
<pubDate>{{ "now" | date: "%a, %d %b %Y %H:%M:%S EST" }}</pubDate>
<title>SoundGarage</title>
<itunes:author>Mike, Joe, Eugene, Matt</itunes:author>
<description>Sound Garage is a place for all things music related.</description>
<itunes:summary>Sound Garage is a place for all things music related.</itunes:summary>
<itunes:subtitle>Sound Garage is a place for all things music related. </itunes:subtitle>
<lastBuildDate>{{ "now" | date: "%a, %d %b %Y %H:%M:%S EST" }}</lastBuildDate>
{% for podcast in collections.podcasts %}
<item>
<title>{{ podcast.data.title }}</title>
<link>{{ podcast.url }}</link>
<description>{{ podcast.data.description }}</description>
<itunes:summary>{{ podcast.data.summary }}</itunes:summary>
<itunes:title>{{ podcast.data.title }}</itunes:title>
<itunes:author>SndGarage</itunes:author>
<content:encoded><![CDATA[ {{ podcast.templateContent | safe }} ]]></content:encoded>
<itunes:subtitle>{{ podcast.data.subTitle }}</itunes:subtitle>
<enclosure url="{{ podcast.data.fileURL }}" type="audio/mpeg" length="1" />
<guid>{{ podcast.data.fileURL }}</guid>
<itunes:duration>{{ podcast.data.duration }}</itunes:duration>
<pubDate>{{ podcast.data.date | date: "%a, %d %b %Y %H:%M:%S EST" }}</pubDate>
</item>
{% endfor %}
</channel>
</rss>
