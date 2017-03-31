set -e
echo    # move to a new line
echo "Enter release version: "
read VERSION

read -p "Releasing $VERSION - are you sure? (Y/n)" -r
echo

if [[ $REPLY =~ ^[Yy]$ ]] || [[ $REPLY = "" ]]; then
  rm -rf ./dist
  mkdir ./dist
  rm -rf ./assets

  echo "Creating publication files..."

  npm run build

  zip -rq "./dist/meditation-${VERSION}.zip" LICENSE README.md package.json tag.hbs post.hbs layout.hbs index.hbs assets partials
  tar -czf "./dist/meditation-${VERSION}.tar.gz" LICENSE README.md package.json tag.hbs post.hbs layout.hbs index.hbs assets partials

  git add -A
  npm version $VERSION -m "Release $VERSION 🎉 🎉"

  git push origin refs/tags/v$VERSION
  git push

  echo "Done!"
fi
