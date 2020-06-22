---
permalink: /podcasts/feed.xml
eleventyExcludeFromCollections: true
---

<?xml version="1.0" encoding="utf-8"?>
<rss xmlns:atom="http://www.w3.org/2005/Atom" xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd" xmlns:itunesu="http://www.itunesu.com/feed" version="2.0">
<channel>
<link>https://www.soundgarage.io</link>
<language>en-us</language>
<copyright>&#xA9;2020</copyright>
<webMaster>soundgarageio+podcast@gmail.com (Sound Garage)</webMaster>
<managingEditor>soundgarageio+podcast@gmail.com (Sound Garage)</managingEditor>
<image>
<url>https://www.soundgarage.io/img/logo2.png</url>
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
<itunes:image href="https://www.soundgarage.io/img/logo2.png" />
<atom:link href="http://www.soundgarage.io/podcasts/feed.xml" rel="self" type="application/rss+xml" />
<pubDate>{{ "now" | date: "%a, %d %b %Y %H:%M:%S EST" }}</pubDate>
<title>Verbose title of the podcast</title>
<itunes:author>College, school, or department owning the podcast</itunes:author>
<description>Verbose description of the podcast.</description>
<itunes:summary>Duplicate of above verbose description.</itunes:summary>
<itunes:subtitle>Short description of the podcast - 255 character max.</itunes:subtitle>
<lastBuildDate>{{ "now" | date: "%a, %d %b %Y %H:%M:%S EST" }}</lastBuildDate>
{% for podcast in collections.podcasts %}
<item>
<title>{{ podcast.data.title }}</title>
<description>{{ podcast.data.description }}</description>
<itunes:summary>{{ podcast.data.summary }}</itunes:summary>
<itunes:subtitle>{{ podcast.data.subTitle }}</itunes:subtitle>
<itunesu:category itunesu:code="112" />
<enclosure url="{{ podcast.data.fileURL }}" type="audio/mpeg" length="1" />
<guid>{{ podcast.data.fileURL }}</guid>
<itunes:duration>{{ podcast.data.duration }}</itunes:duration>
<pubDate>{{ podcast.data.date | date: "%a, %d %b %Y %H:%M:%S EST" }}</pubDate>
</item>
{% endfor %}
</channel>
</rss>
