pip uninstall apindex -y
pip install git+https://github.com/alphazero-official/static-file-index
cd ./music/10/retrospective/
apindex .
cd ..\..\..
bundle exec jekyll serve