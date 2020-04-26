import { expect } from 'chai';
import * as index from '../lib/First';

describe('getPlural function test', () => {
    it('should return Boys', () => {
        const result = index.getPlural('Boy');
        expect(result).to.equal('Boyasdf');
    });
    it('should return Girls', () => {
        const result = index.getPlural('Girl');
        expect(result).to.equal('Girlasdf');
    });
    it('should return Geese', () => {
        const result = index.getPlural('Goose');
        expect(result).to.equal('Gooseasdf');
    });
    it('should return Toys', () => {
        const result = index.getPlural('Toy');
        expect(result).to.equal('Toyasdf');
    });
    it('should return Men', () => {
        const result = index.getPlural('Man');
        expect(result).to.equal('Manasdf');
    });
});
