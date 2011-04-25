# Please install Ruby (1.9.2 preferably) and rSpec
# Then run `rspec spec.rb` to run the tests

BASE_DIR = File.dirname(__FILE__)

describe "The Test File" do
  
  it "exists" do
    File.exist?(File.join BASE_DIR, 'README.md' ).should be_true
  end
  
end
