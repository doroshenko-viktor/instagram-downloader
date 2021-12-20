# Readme

## Instagram Authentication

You can access the token generator in the App Dashboard > Products > Instagram > Basic Display tab.

To get user id execute the GET request to:

```url
https://www.instagram.com/{username}/?__a=1
```

Response type:

```json
{
  "data": [],
  "paging": {}
}
```

Get user media list:

```
GET /me/media?fields={fields}&access_token={access-token}
'https://graph.instagram.com/me/media?fields=id,caption&access_token=IGQVJ...'
```

Sample response:

```json
{
  "data": [
    {
      "id": "17895695668004550",
      "caption": ""
    },
    {
      "id": "17899305451014820",
      "caption": ""
    },
    {
      "id": "17896450804038745",
      "caption": ""
    },
    {
      "id": "17881042411086627",
      "caption": ""
    }
  ],
  "paging": {
    "cursors": {
      "after": "MTAxN...",
      "before": "NDMyN..."
      },
    "next": "https://graph.faceb..."
  }
}
```

Get user media:

```
GET /{media-id}?fields={fields}&access_token={access-token}
'https://graph.instagram.com/17895695668004550?fields=id,media_type,media_url,username,timestamp&access_token=IGQVJ...'
```


Possible fields:

```
caption

The Media's caption text. Not returnable for Media in albums.

id

The Media's ID.

media_type

The Media's type. Can be IMAGE, VIDEO, or CAROUSEL_ALBUM.

media_url

The Media's URL.

permalink

The Media's permanent URL. Will be omitted if the Media contains copyrighted material, or has been flagged for a copyright violation.

thumbnail_url

The Media's thumbnail image URL. Only available on VIDEO Media.

timestamp

The Media's publish date in ISO 8601 format.

username

The Media owner's username.
```