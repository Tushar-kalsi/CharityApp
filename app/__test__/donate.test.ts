import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/svelte';
import { othersAddress, platform, wallet } from '$lib/stores';
import FindFundraiser from './FindFundraiser.svelte';

describe('FindFundraiser', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('should render the component', () => {
    const { getByText } = render(FindFundraiser);
    expect(getByText('Find Fundraise')).toBeInTheDocument();
  });

  it('should call findFundraiser when the search button is clicked', async () => {
    const { getByPlaceholderText, getByRole } = render(FindFundraiser);
    const addressInput = getByPlaceholderText('Fundraiser address');
    const searchButton = getByRole('button', { name: /search/i });

    await fireEvent.input(addressInput, { target: { value: '29mQ1f4CvW8zJT4cDRcsZv3FsNRX16FNFfubFXDHCND3' } });
    await fireEvent.click(searchButton);

    expect($othersAddress).toBe('29mQ1f4CvW8zJT4cDRcsZv3FsNRX16FNFfubFXDHCND3');
  });

  it('should call donate when the donate button is clicked', async () => {
    const { getByPlaceholderText, getByRole } = render(FindFundraiser);
    const addressInput = getByPlaceholderText('Fundraiser address');
    const amountInput = getByPlaceholderText('100');
    const donateButton = getByRole('button', { name: /donate/i });

    await fireEvent.input(addressInput, { target: { value: '29mQ1f4CvW8zJT4cDRcsZv3FsNRX16FNFfubFXDHCND3' } });
    await fireEvent.input(amountInput, { target: { value: '100' } });
    await fireEvent.click(donateButton);

    expect($wallet.publicKey.toString()).toBe('29mQ1f4CvW8zJT4cDRcsZv3FsNRX16FNFfubFXDHCND3');
  });
});